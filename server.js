// DEPENDENCIES
const express = require('express');
const app = express();
const PORT = 3000;
const expressLayouts = require('express-ejs-layouts');
const authRoutes = require('./controllers/authController');
const session = require('express-session');
// const morgan = require('morgan');

app.set('view engine', 'ejs');

// MIDDLEWARE 
app.use(express.static('public'));
app.use(expressLayouts);
app.use(session({secret: '', cookie: {maxAge: 3600000}}))
app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// // app.use(methodoverride('_method'));
// app.use(morgan('tiny'));


app.use(authRoutes); 

// HOME PAGE ROUTE
app.get('/', (req, res) => {
    res.render('home.ejs');
});


// SERVER LISTENER
app.listen(PORT, () => {
    console.log(`GainFlex Tracker on Port ${PORT}!`);
  });