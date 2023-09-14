/** Import module */
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

/** Import self-define file */
var routes = require('./routes/index');
const errHandle = require("./auth/error-handle")
require('dotenv').config()

/**
 * -------------- GENERAL SETUP ----------------
 */

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: '*'
}))

/**
 * -------------- SESSION SETUP ----------------
 */


/**
 * -------------- ROUTES ----------------
 */

app.use(routes);

/** SETUP DB */

mongoose.connect(process.env.DATABASE_URL).then((re)=>console.log("oke")).catch((err)=>console.log(err))

/**
 * -------------- SERVER ----------------
 */
app.use(errHandle)
app.listen(4000);

 