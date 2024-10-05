const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Cake = sequelize.define('Cake', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    imageUrl:{
      type:DataTypes.STRING,
      allowNull:true,
    },
  });
  Cake.associate = (models) => {
    Cake.belongsToMany(models.User, {
      through: models.UserCake,
      foreignKey: 'CakeId',
    });
  };
  return Cake;
};
