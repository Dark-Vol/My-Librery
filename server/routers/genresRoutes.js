const express = require('express');
const {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
} = require('../controllers/genresControllers');

const router = express.Router();

// GET /api/genres - получить все жанры
router.get('/', getAllGenres);

// GET /api/genres/:id - получить жанр по ID
router.get('/:id', getGenreById);

// POST /api/genres - создать новый жанр
router.post('/', createGenre);

// PUT /api/genres/:id - обновить жанр
router.put('/:id', updateGenre);

// DELETE /api/genres/:id - удалить жанр
router.delete('/:id', deleteGenre);

module.exports = router;
