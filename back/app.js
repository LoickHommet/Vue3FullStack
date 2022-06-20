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

app.use(express.json());
app.use(cors(corsOption))
app.use(express.json());



if (process.env.NODE_ENV !== 'test') 
{
    app.listen(process.env.PORT, () => { console.log(`Écoute sur le port ${process.env.PORT}`); })
}