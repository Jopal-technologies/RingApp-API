const express = require('express');
const app = express();
const port = 8081;
const { Sequelize } = require('sequelize');
const { config } = require('../config');

app.get('/test', (_, res)=>{
    res.json("chupame el pitos")
});

const sequelize = new Sequelize('RingApp', 'postgres', config.password, {
    host: 'localhost',
    dialect: 'postgres'
});
  
app.listen(port, async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }    
    console.log('Xuclame el orto');
});
