const express = require('express');
const app = express();
require('express-async-errors');
const Joi = require('joi');
const bcrypt = require('bcrypt');
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

let _id = 1;

const User = mongoose.model('User', userSchema);

// Connexion à MongoDB
mongoose.connect("mongodb://localhost:27017/Eval")
.then( async function () {
    console.log("Connecté à la BDD");
  
})
.catch( () => {
    console.log("Non connecté")
})


app.post('/signup', async (req, res) => {
    
    const payload = req.body;

    const joiUserSchema = Joi.object({
        email : Joi.string().min(4).max(255).required(),
        password : Joi.string().min(2).max(255).required(),
    })
    

    const {error} = joiUserSchema.validate(payload);

    if ( ! error) {
        let id = _id++;

        const userFound = await User.findOne({email : payload.email}).exec()
            .then( async (data) => {
                if ( ! data) {
                    const salt = await bcrypt.genSalt(10);
                    let { password } = payload;
                    passwordHashed = await bcrypt.hash(password, salt);
                    payload.password = passwordHashed;
                    
                    const user = new User({...payload, _id : id});
                    await user.save();

                    delete payload.password;
                    res.status(201).send({...payload, _id : id});
                }

                else {
                    res.send("Cette adresse est déjà associé à un compte");
                };

            })
        ;
    }
    else {
        res.status(400).send({ erreur : error.details[0].message });
    }
})

app.post('/login', async (req, res) => {
    const payload = req.body;
    const scheme = Joi.object({
        email: Joi.string().max(255).email().required(),
        password: Joi.string().max(255).required()
    });
    const {value, error} = scheme.validate(payload);
    if (error) {
        throw new Error(error.details[0].message);
    }
    const user = await User.findOne({email: value.email});
    //const {id, entity} = Users.findBy('email', value.email);
    if (!user) {
        throw new Error("Ce compte n'existe pas");
    }
    const goodHash = await bcrypt.compare(payload.password, user.password);
    if (!goodHash) {
        throw new Error('Mot de passe invalide');
    }
    const token = jwt.sign({id: user.id}, process.env.SECRET_KEY);
    res.header('x-auth-token', token).status(200).send({user: user});
});


if (process.env.NODE_ENV !== 'test') 
{
    app.listen(process.env.PORT, () => { console.log(`Écoute sur le port ${process.env.PORT}`); })
}