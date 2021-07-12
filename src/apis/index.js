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
    return Auth.signUp({
      username,
      password,
    })
  },
}
