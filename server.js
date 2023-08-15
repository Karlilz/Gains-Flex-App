// DEPE
const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const PORT = 3000;


// MIDDLEWARE 
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodoverride('_method'));
app.use(morgan('tiny'));
app.use(express.static('public'));


// SERVER LISTENER
app.listen(PORT, () => {
    console.log(`GainFlex Tracker on Port ${PORT}!`);
  });