const Fs = require('fs');
const ejs = require('ejs');

// 指定ejs规则
ejs.delimiter = '?';

const renderCache = Object.create(null); // 生产环境render会缓存起来

module.exports = {
  async renderPage(pageName, locals) {
    const { config } = this.app;
    let render = renderCache[pageName];

    if (!render) {
      if (config.env === 'local') {
        // 开发环境从webpack端口抓取模板
        const layout = `http://127.0.0.1:${config.webpackPort}/${pageName}.html`;
        const res = await this.curl(layout, {
          dataType: 'text',
          method: 'GET'
        });
        if (res && res.data) {
          render = ejs.render(res.data, locals);
        }
      } else {
        // 非开发环境（生产环境、staging环境）从`/public/`读取
        const layout = `${config.baseDir}/public/${pageName}.html`;
        if (Fs.existsSync(layout)) {
          render = ejs.render(Fs.readFileSync(layout, 'utf8'), locals);
          renderCache[pageName] = render;
        }
      }
    }

    if (render) {
      this.body = render;
    } else {
      this.status = 500;
      this.body = 'layout is not found';
    }
  }
};
