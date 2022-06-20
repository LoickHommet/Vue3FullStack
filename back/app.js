const express = require('express');
const app = express();
require('express-async-errors');
const Joi = require('joi');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');
const corsOption = {
    exposedHeaders: "x-auth-token"
}
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors(corsOption))
app.use(express.json());

const userSchema = new mongoose.Schema({
    _id : Number,
    email : String,
    password : String
});
const User = mongoose.model('User', userSchema);

// Connexion à MongoDB
mongoose.connect("mongodb://localhost:27017/Eval")
.then( async function () {
    console.log("Connecté à la BDD");

    

  
})
.catch( () => {
    console.log("Non connecté")
})



if (process.env.NODE_ENV !== 'test') 
{
    app.listen(process.env.PORT, () => { console.log(`Écoute sur le port ${process.env.PORT}`); })
}