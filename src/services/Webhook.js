const Base = require('../structures/Base');
module.exports = class Webhook extends Base {
  constructor(options) {
    super(options.auth, {
      makeRequest: options.makeRequest
    })
  }

  async receiveVote(toExecute) {
    if (!this.auth) throw new Error(`Invalid authorization`, { code: 401 });
    const request = {
      user: toExecute.headers.user,
      bot: toExecute.headers.bot,
      totalVotes: toExecute.headers.totalVotes
    }
    return toExecute(request)
  }
}