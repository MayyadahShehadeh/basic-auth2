'use strict';

const bcrypt = require('bcrypt');
const {Users} = require('../models/index');
const express = require('express');
const router = express.Router();
const basicAuth = require('../middlewares/basicAuth');

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo
router.post('/signup', async (req, res) => {

    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const record = await Users.create(req.body);
        res.status(200).json(record);
    } catch (e) { res.status(403).send("Error Creating User"); }
});




// -------------------------------------------------------------------------------------


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin',basicAuth(Users), async (req, res) => {

    res.status(200).json(req.user);
   

});

module.exports = router;