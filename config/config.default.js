module.exports = appInfo => {
  const config = {};

  config.keys = `${appInfo.name}_1666882610450_209`;

  config.middleware = ['access'];

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'test',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    timezone: '+08:00',
    underscored: true,
  };

  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
