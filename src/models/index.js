const { Sequelize } = require('sequelize');
const { config } = require('../../config');

const connectDb = async () => {
   
      try {
        const sequelize = new Sequelize(config.dataBase.dbName, config.dataBase.user, config.dataBase.password, {
            host: config.dataBase.host,
            dialect: config.dataBase.dbType
        });
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }  
}

exports.connectDb = connectDb;