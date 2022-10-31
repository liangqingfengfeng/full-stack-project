'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      CREATE TABLE \`users\` (
        \`id\` INTEGER NOT NULL AUTO_INCREMENT,
        \`name\` VARCHAR(64) NOT NULL,
        \`avatar\` VARCHAR(255) DEFAULT '',
        \`password\` VARCHAR(255) NOT NULL,
        \`created_at\` DATETIME NOT NULL,
        \`updated_at\` DATETIME NOT NULL,
        \`deleted_at\` DATETIME DEFAULT NULL,
    
        PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB AUTO_INCREMENT=520 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
      `,
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
