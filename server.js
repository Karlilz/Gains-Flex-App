// DEPENDENCIES
const express = require('express');
const app = express();
const PORT = 3000;
const expressLayouts = require('express-ejs-layouts');
// const morgan = require('morgan');

app.set('view engine', 'ejs');

// MIDDLEWARE 
app.use(express.static('public'));
app.use(expressLayouts);
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// // app.use(methodoverride('_method'));
// app.use(morgan('tiny'));

// HOME PAGE
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// SERVER LISTENER
app.listen(PORT, () => {
    console.log(`GainFlex Tracker on Port ${PORT}!`);
  });