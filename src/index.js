const express = require('express');
const { connectDb } = require('./models/index');
const { User } = require('./models/user');
const { config } = require('../config')
const app = express();
const port = config.port || 8080;

connectDb();

app.get('/test', (_, res)=>{
    res.json("chupame el pitos")
});
app.get('/user', async (req, res)=>{
    
    
    const a = User.build({
        Name: "Alvaro",
        Surname: "Alonso",
        Email: "alvaroarpal@gmail.com",
        Country: "Spain",
        BirthDate: "04/04/1996",
        ConfigId: null,
    })
    a.save().then(paco => {
        console.log(paco)
    });
    
    const select = await User.findAll();
    
    res.json(select)
});


app.listen(port, ()=>console.log(`Listening on port ${port}`));
