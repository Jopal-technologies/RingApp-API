const { config } = require('../../../config');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`${config.dataBase.dbType}://${config.dataBase.user}:${config.dataBase.password}@${config.dataBase.host}:5432/${config.dataBase.dbName}`);

const Language = sequelize.define('Language', {
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
})


exports.Language = Language;
exports.sequelize = sequelize;


(async()=>{
    try{ 
      await Language.sync()
    }catch(e){
        console.log(e);
        console.log('failed');
    }
})();



