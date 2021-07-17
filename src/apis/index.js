import { Auth } from 'aws-amplify'
export default {
  /**
   * 登录
   * @param {string} username
   * @param {string} password
   */
  login(username, password) {
    return Auth.signIn(username, password)
  },

  signUp(username, password) {
    Auth.configure({
      // endpoint: 'http://localhost:3000',
    })
    return Auth.signUp({
      username,
      password,
      attributes: {
        email: username,
      },
    })
  },
}
