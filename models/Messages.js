const {DataTypes}=require("sequelize")
module.exports = (sequelize)=>{
    const Message=sequelize.define('Message', {
      fromUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      toUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  });
  return Message;
}