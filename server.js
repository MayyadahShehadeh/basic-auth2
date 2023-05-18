'use strict';

// 3rd Party Resources
const express = require('express');
const userRoutes = require('./routes/routes');


// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());
app.use(userRoutes);




// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res)=>{
    console.log('home route !!');
    res.send('home route !!');
})



module.exports = app;