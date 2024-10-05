const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserCake = sequelize.define('UserCake', {
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    CakeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cake',
        key: 'id'
      }
    }
  });

  return UserCake;
};
