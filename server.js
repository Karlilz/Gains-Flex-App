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

// LOGIN BUTTON - to LOGIN PAGE
app.get('/login', (req, res) => {
    res.render('auth/login');
});

// LOGIN BUTTON - to MAIN Exercise PAGE
app.post('/login', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// SIGNUP BUTTON - to SIGNUP PAGE
app.get('/signup', (req, res) => {
    res.render('auth/signup');
});

// Create the user and navigate to LOGIN
app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

// SERVER LISTENER
app.listen(PORT, () => {
    console.log(`GainFlex Tracker on Port ${PORT}!`);
  });