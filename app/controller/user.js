const BaseController = require('./baseController');

class HomeController extends BaseController {
  async find() {
    const { userId } = this.ctx.query;
    const user = await this.service.user.find(userId);
    this.success(user);
  }
  async test() {
    const user = await this.ctx.model.User.create({ name: 'ben', password: '123' });
    this.success(user);
  }
}

module.exports = HomeController;
