//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

let users = ["User 1", "User 2", "User 3"];
let addError = false;
let removeError = false;
let uname = "";


router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA02: true, // For HBS
        contentCSS: true, // For HBS
        users: users,
        addError: addError,
        removeError: removeError,
        uname: uname,
    });
    return res.end();
});

router.post('/addUser',(req, res, next) => {
    console.log('Post request!');
    uname = req.body.username;
    if (users.includes(uname)) {
        addError = true;
        console.log(`ERROR: Username ${uname} already in use.`);
    } else {
        addError = false;
        console.log(req.body.username);
        users.push(req.body.username);
    }
    res.redirect('/ta02');
});

router.post('/removeUser',(req, res, next) => {
    console.log('Post request!');
    uname = req.body.username;
    if (users.includes(uname)) {
        removeError = false;
        console.log(uname);
        users = users.filter(item => item !== uname);
    } else {
        removeError = true;
        console.log(`ERROR: Username ${uname} does not exist.`);
    }
    res.redirect('/ta02');
});

module.exports = router;