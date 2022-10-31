module.exports = app => {
  const { STRING, DATE, NOW } = app.Sequelize;

  const User = app.model.define(
    'user',
    {
      avatar: STRING(256),
      name: STRING(30),
      password: STRING(32),
      createdAt: {
        type: DATE,
        allowNull: false,
        defaultValue: NOW,
      },
      updatedAt: {
        type: DATE,
        allowNull: false,
        defaultValue: NOW,
      },
      deletedAt: {
        type: DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'users',
      underscored: true,
    },
  );

  return User;
};
