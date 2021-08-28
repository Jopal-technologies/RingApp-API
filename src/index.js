const express = require('express');
const { connectDb } = require('./models/index');
const { config } = require('../config')
const app = express();
const port = config.port || 8080;

connectDb();

app.get('/test', (_, res)=>{
    res.json("chupame el pitos")
});


app.listen(port, ()=>console.log(`Listening on port ${port}`));
