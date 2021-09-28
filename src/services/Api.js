/**
*@param {object} { auth: String, makeRequest: Boolean }
*@param {number} getUser(Number or String, id of user)
*@param {number} getBot(Number or string)
*/
const fetch = require('node-fetch');
const Base = require('../structures/Base');
module.exports = class Api extends Base {
  constructor(options) {
    super(options.auth, {
      makeRequest: options.makeRequest
    })
  }
  async getUser(id) {
    const info = await fetch(process.env.apiUser).then(f => f.json());
    if (!id) return null;
    const user = info[id];
    if(!user) return null;
    delete user['cooldown']
    return user;
  }
  async getBot(id) {
    const info = await fetch(process.env.apiBot).then(f => f.json());
    if (!id) return null;
    const bot = info[id];
    if (!bot) return null;
    return bot;

  }
}