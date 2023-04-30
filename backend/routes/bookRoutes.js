const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/books', bookController.getBooks);

router.post('/books', bookController.addBook);

router.delete('/books/:id', bookController.deleteBook);

router.get('/books/search', bookController.searchBooks);

module.exports = router;
