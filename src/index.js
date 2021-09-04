const { userDto } = require('./models/user/userDto');
const express = require('express');
const { connectDb } = require('./models/index');
const { config } = require('../config')
const app = express();
const port = config.port || 8080;
const { userController }= require('./controllers/user/userController');
connectDb();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    }
    next();
});

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

app.post('/user', async (req, res)=>{ 
    const user = new userDto(req.body);
    const insertedUser = await userController.postUser(user);
    res.json(insertedUser);
}); 

app.put('/user/:id', async (req, res)=>{ 
    const user = new userDto(req.body);
    const updatedUser = await userController.putUser(user, req.params.id);
    res.json(updatedUser);
});

app.delete('/user/:id', async (req, res) => {
    const deletedUser = await userController.deleteUser(req.params.id);
    res.json(deletedUser);
})


app.listen(port, ()=>console.log(`Listening on port ${port}`));
