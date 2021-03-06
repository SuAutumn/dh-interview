import http from 'http'
import url from 'url'
import crypto from 'crypto'
import clientCognitoIdentity from '@aws-sdk/client-cognito-identity-provider'

const { CognitoIdentityProvider } = clientCognitoIdentity


const server = http.createServer(async (req, res) => {
  let origin = '*'
  if (req.headers.referer) {
    origin = new url.URL(req.headers.referer).origin
  }
  res.setHeader('Access-Control-Allow-Origin', origin)
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, x-amz-target, x-amz-user-agent',
  )
  if (req.method === 'OPTIONS') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end()
    return
  }
  const bodyStr = await getReqBody(req)
  const body = JSON.parse(bodyStr)
  body.SecretHash = getSecretHash(body.Username, body.ClientId)
  const provider = new CognitoIdentityProvider({ region: region })
  try {
    const data = await provider.signUp(body)
    console.log('data', data)
    res.writeHead(200, { 'Content-Type': 'application/x-amz-json-1.1' })
    res.end(JSON.stringify(data))
  } catch (e) {
    res.writeHead(e.$metadata.httpStatusCode, { 'Content-Type': 'application/x-amz-json-1.1' })
    res.end(JSON.stringify({
      name: e.name,
      message: e.message,
    }))
  }
})

server.listen(3000)
console.log('serve run at port 3000, CTRL + D stop it.')

function genPromise() {
  let success, fail
  const p = new Promise((resolve, reject) => {
    success = resolve
    fail = reject
  })
  return { p, success, fail }
}

/**
 * 获取请求body数据
 * @param {http.IncomingMessage} req - 客户端请求
 */
function getReqBody(req) {
  const { p, success, fail } = genPromise()
  let str = ''
  req.on('data', (/** @type string */ chunk) => {
    str += chunk
  })
  req.on('end', () => {
    success(str)
  })
  req.on('error', (e) => {
    fail(e)
  })
  return p
}

// const clientSecret = 'k896edqfibmfieqdj5vhk4rig2j68e014freoeuhfgo25k8clme'
const clientSecret = '1b5imnq1o1ut4nqahbvdj5grokm4te7gf6251hbekppapvjaf8h7'
const region = 'ap-southeast-2'

function getSecretHash(username, clientId) {
  return crypto
    .createHmac('SHA256', clientSecret)
    .update(username + clientId)
    .digest('base64')
}
