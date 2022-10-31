const { Controller } = require('egg');

class BaseController extends Controller {
  success(data) {
    const { ctx } = this;
    ctx.body = data;
    ctx.status = 200;
  }
  fail(message = 'server error') {
    const { ctx } = this;
    ctx.body = message;
    ctx.status = 500;
  }
}

module.exports = BaseController;
