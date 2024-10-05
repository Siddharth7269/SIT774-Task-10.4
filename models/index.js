// models/index.js
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});
const User = require('./User')(sequelize);
const Cake = require('./Cake')(sequelize);
const UserCake = require('./UserCake')(sequelize);
const Message=require('./Messages')(sequelize);
const models = {
  User,
  Cake,
  UserCake,
  Message,

};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, User, Cake, UserCake ,Message};
