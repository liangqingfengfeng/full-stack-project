require('egg').startCluster({
  baseDir: __dirname,
  workers: process.env.WORKERS,
  port: process.env.PORT || 7001
});
