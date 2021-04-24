const express = require('express');
const router = express.Router();

const users = ["User 1", "User 2", "User 3"];

router.get('/',(req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form></body>');
    res.write('</html>');
    return res.end();
});

router.get('/users',(req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body>');
    res.write('<ul>');
    for (const user of users) {
      res.write(`<li>${user}</li>`);
    }
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
});

router.post('/create-user',(req, res, next) => {
    console.log('Post request!');
    console.log(req.body.username)
    users.push(req.body.username);
    res.redirect('/users');
});

module.exports = router;