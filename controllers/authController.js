const express = require('express');
const router = express.Router();
const User = require('../models/user');
// const bcrypt = require('bbcrypt');

// LOGIN BUTTON - to LOGIN PAGE
router.get('/login', (req, res) => {
    res.render('auth/login');
});

// LOGIN BUTTON - to MAIN Exercise PAGE
router.post('/login', async (req, res) => {
    console.log(req.body);
    let userToLogin = await User.findOne({ username: req.body.username });
    if (userToLogin) {
        if (userToLogin.password === req.body.password) {
            res.send("Logged In!");
        } else {
            res.send("Incorrect Password");
        }
    }
});

// SIGNUP BUTTON - to SIGNUP PAGE
router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

// Create the user and navigate to LOGIN
router.post('/signup', async (req, res) => {
    console.log(req.body);
    if (req.body.username && req.body.password) {
        let newUser = await User.create(req.body)
        res.send(newUser)
    }
});


module.exports = router;