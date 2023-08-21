// DEPENDENCIES
const express = require('express');
const app = express();
const PORT = 3000;
const expressLayouts = require('express-ejs-layouts');
const authRoutes = require('./controllers/authController');
const session = require('express-session');
const exerciseRoutes = require('./controllers/exerciseController');
const scheduleRoutes = require('./controllers/scheduleController');

// View engine set to EJS
app.set('view engine', 'ejs');

// MIDDLEWARE 
app.use(express.static('public'));
app.use(expressLayouts);
app.use(session({secret: 'Karla', cookie: {maxAge: 3600000}}))
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
app.use(authRoutes); 

// HOME PAGE ROUTE
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// define our own middleware to check for a loggin user. If no user go to login screen
// app.use((req, res, next) => {
//     if(!req.session.userId){
//         res.redirect('/login');
//         return;
//     } 
//     next ();
// });

app.use(exerciseRoutes); 
app.use(scheduleRoutes);

// SERVER LISTENER
app.listen(PORT, () => {
    console.log(`GainFlex Tracker on Port ${PORT}!`);
  });