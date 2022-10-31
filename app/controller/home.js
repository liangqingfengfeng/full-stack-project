const BaseController = require('./baseController');

class HomeController extends BaseController {
  async index() {
    this.success('hi, egg');
  }
}

module.exports = HomeController;
