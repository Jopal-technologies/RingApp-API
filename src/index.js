import express from 'express';
//const express = require('express');
const app = express();
const port = 8080;
const { Sequelize } = require('sequelize');
const config = require('../config');

app.get('/test', (req, res)=>{
    res.json("chupame el pito")
});
const sequelize = new Sequelize('RingApp', 'postgres', config.config.password, {
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
