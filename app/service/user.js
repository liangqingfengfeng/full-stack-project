const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.ctx.model.User.findOne({ where: { id: uid }, raw: true });
    return user;
  }
}

module.exports = UserService;
