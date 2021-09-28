module.exports = class Base {
  constructor(auth, options) {
    this.auth = auth;
    this.makeRequest = Boolean(options.makeRequest)
  }
}