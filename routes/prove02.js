const express = require('express');
const router = express.Router();

let books = [{
    "title":"Book1",
    "author":"Someone",
    "summary":"Book1 summary goes here."
},
{
    "title":"Book2",
    "author":"Someone Else",
    "summary":"Book2 summary goes here."
}];

router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        title: '02 Prove: Assignment', 
        path: '/prove02', // For pug, EJS 
        activePP02: true, // For HBS
        contentCSS: true, // For HBS
        books: books,
    });
});

router.post('/addBook',(req, res, next) => {
    console.log('Post request!');
    let book = {};
    book.title = req.body.title;
    book.author = req.body.author;
    book.summary = req.body.summary;
    console.log(book);
    books.push(book);
    res.redirect('/prove02');
});

module.exports = router;