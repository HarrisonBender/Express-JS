const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');


let app = express();


//Step 3: Create an express server that responds to the root get request with text.
app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
});


//Step 4: Create an Express Static to server files from 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Step 5: create a middleware using app.use to console.log every req.url
app.use((req, res, next) => {
    console.log(req.url);
    next();
});


//Advanced
app.use(express.urlencoded({extended: false}));

app.post('/contact-form', (req, res) => {
    fs.appendFileSync('formsubmissions.txt', `${req.body.email}\n`);
    fs.appendFileSync('formsubmissions.txt', `${req.body.name}\n`);
    res.send("Thank you for submitting!");
    });
    

app.listen(3000);
