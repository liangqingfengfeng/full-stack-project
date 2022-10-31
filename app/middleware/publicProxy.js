const proxy = require('koa-proxy');

module.exports = () =>
  proxy({
    host: 'http://127.0.0.1:3000',
    match: /^\/static\//
  });
