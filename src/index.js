const { userDto } = require('./models/user/userDto');
const express = require('express');
const { connectDb } = require('./models/index');
const { config } = require('../config')
const app = express();
const port = config.port || 8080;
const { userController }= require('./controllers/user/userController');
connectDb();

app.get('/users', (_, res)=>{    
    userController.getAllUsers().then((users)=>{
        res.json(users);
    })
});
app.get('/user/:id', (req, res)=>{ 
    userController.getUserById(req.params.id).then((user)=>{
        res.json(user);
    })
});
app.post('/user', (req, res)=>{ 
    console.log(req.body.name);
    //const user = new userDto(req.body);
    //userController.postUser(user);
    
    res.json({
        ok:'ok'
    });
}) 


app.listen(port, ()=>console.log(`Listening on port ${port}`));
