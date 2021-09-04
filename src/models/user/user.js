const { config } = require('../../../config');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`${config.dataBase.dbType}://${config.dataBase.user}:${config.dataBase.password}@${config.dataBase.host}:5432/${config.dataBase.dbName}`);

const User = sequelize.define('User', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BirthDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ConfigId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
})


exports.User = User;
exports.sequelize = sequelize;


(async()=>{
    try{ 
      await User.sync()
    }catch(e){
        console.log(e);
        console.log('failed');
    }
})();



