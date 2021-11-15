// #region imports
const { userDto } = require('./models/user/userDto');
const { languageDto } = require('./models/langauge/languageDto');
const express = require('express');
const { connectDb } = require('./models/index');
const { config } = require('../config')
const app = express();
const port = config.port || 8080;
const { userController }= require('./controllers/user/userController');
const { languageController } = require('./controllers/language/languageController');
// #endregion

// #region App setup
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
// #endregion
// #region Users
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

//get all languages
app.get('/languages', (_, res)=>{    
    languageController.getAllLanguages().then((languages)=>{
        res.json(languages);
    })
});

// get language by id
app.get('/language/:id', (req, res)=>{ 
    languageController.getLanguageById(req.params.id).then((language)=>{
        res.json(language);
    })
});

// post language
app.post('/language', async (req, res)=>{
    const language = new languageDto(req.body);
    const insertedLanguage = await languageController.postLanguage(language);
    res.json(insertedLanguage);
});

// put language
app.put('/language/:id', async (req, res)=>{
    const language = new languageDto(req.body);
    const updatedLanguage = await languageController.putLanguage(language, req.params.id);
    res.json(updatedLanguage);
});

// delete language
app.delete('/language/:id', async (req, res) => {
    const deletedLanguage = await languageController.deleteLanguage(req.params.id);
    res.json(deletedLanguage);
});

// #endregion

// #region Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// #endregion


// #endregion
// #region Configuration

    //TODO: [RIN-5] Jopa a programar cabroncete
// #endregion
// #region Langauges
app.get('/language', (_, res)=>{    
    languageController.getAllLanguagess().then((languages)=>{
        res.json(languages);
    })
});

app.get('/languages/:id', (req, res)=>{ 
    languageController.getLanguagesById(req.params.id).then((languages)=>{
        res.json(languages);
    })
});

app.post('/languages', async (req, res)=>{ 
    const languages = new languageDto(req.body);
    const insertedLanguages = await languageController.postLanguage(languages);
    res.json(insertedLanguages);
}); 

app.put('/languages/:id', async (req, res)=>{ 
    const languages = new languageDto(req.body);
    const updatedLanguages = await languageController.putLanguage(languages, req.params.id);
    res.json(updatedLanguages);
});

app.delete('/languages/:id', async (req, res) => {
    const deletedLanguage = await languageController.deleteLanguage(req.params.id);
    res.json(deletedLanguage);
})
// #endregion
app.listen(port, ()=>console.log(`Listening on port ${port}`));
