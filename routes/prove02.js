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

let titleError = false;
let authorError = false;
let summaryError = false;

router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        title: '02 Prove: Assignment', 
        path: '/prove02', // For pug, EJS 
        activePP02: true, // For HBS
        contentCSS: true, // For HBS
        books: books,
        titleError: titleError,
        authorError: authorError,
        summaryError: summaryError,
    });
});

router.post('/addBook',(req, res, next) => {
    console.log('Post request!');
    let book = {};
    book.title = req.body.title;
    titleError = book.title === "";
    book.author = req.body.author;
    authorError = book.author === "";
    book.summary = req.body.summary;
    summaryError = book.summary === "";
    if (titleError || authorError || summaryError) {
      console.log(`ERROR: Please enter the requested information in all fields.`)
    } else {
      console.log(book);
      books.push(book);
    }
    res.redirect('/prove02');
});

module.exports = router;