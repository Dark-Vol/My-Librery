const express = require('express');
const {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/booksControllers');

const router = express.Router();

// GET /api/books - получить все книги
router.get('/', getAllBooks);

// GET /api/books/:id - получить книгу по ID
router.get('/:id', getBookById);

// POST /api/books - создать новую книгу
router.post('/', createBook);

// PUT /api/books/:id - обновить книгу
router.put('/:id', updateBook);

// DELETE /api/books/:id - удалить книгу
router.delete('/:id', deleteBook);

module.exports = router;

