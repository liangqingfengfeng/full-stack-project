const BaseController = require('./baseController');

class HomeController extends BaseController {
  async home() {
    const { ctx } = this;
    await ctx.renderPage('index', { title: '主页' });
  }
}

module.exports = HomeController;
