require("dotenv").config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const Pig = require('pigcolor');
const multer = require('multer')

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.set('view engine', 'ejs');


// *? ----------------------------------------------------------------

// ** ------------------ ( Application Route ) -----------------------



// *? ----------------------------------------------------------------

//DB Connection
mongoose
    .connect(process.env.DATABASE_D, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        Pig.db();
    });



// Port

const Port = process.env.PORT || 8000;


// ** Testing 
app.get("/", (req, res) => {
    res.render('Home.ejs');
});


// ?? --------------------------------------------

// ?? -------------- ( API ) ----------------------




// ?? ---------------------------------------------

// Starting a port here
app.listen(Port, () => {
    Pig.server(Port);
});