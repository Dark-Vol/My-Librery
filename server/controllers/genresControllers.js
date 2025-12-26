const { Genre, Book } = require('../models/models');

// GET /api/genres - получить все жанры
const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.findAll({
            include: [{
                model: Book
            }],
            order: [['name', 'ASC']]
        });
        res.json(genres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET /api/genres/:id - получить жанр по ID
const getGenreById = async (req, res) => {
    try {
        const genre = await Genre.findByPk(req.params.id, {
            include: [{
                model: Book
            }]
        });
        
        if (!genre) {
            return res.status(404).json({ error: 'Жанр не найден' });
        }
        
        res.json(genre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST /api/genres - создать новый жанр
const createGenre = async (req, res) => {
    try {
        const { name } = req.body;
        
        if (!name) {
            return res.status(400).json({ error: 'Название жанра обязательно' });
        }
        
        const genre = await Genre.create({ name });
        res.status(201).json(genre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT /api/genres/:id - обновить жанр
const updateGenre = async (req, res) => {
    try {
        const { name } = req.body;
        const genre = await Genre.findByPk(req.params.id);
        
        if (!genre) {
            return res.status(404).json({ error: 'Жанр не найден' });
        }
        
        if (!name) {
            return res.status(400).json({ error: 'Название жанра обязательно' });
        }
        
        genre.name = name;
        await genre.save();
        
        res.json(genre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE /api/genres/:id - удалить жанр
const deleteGenre = async (req, res) => {
    try {
        const genre = await Genre.findByPk(req.params.id);
        
        if (!genre) {
            return res.status(404).json({ error: 'Жанр не найден' });
        }
        
        // Проверяем, есть ли книги с этим жанром
        const booksCount = await Book.count({ where: { genreId: req.params.id } });
        
        if (booksCount > 0) {
            return res.status(400).json({ 
                error: `Невозможно удалить жанр. С ним связано ${booksCount} книг(и)` 
            });
        }
        
        await genre.destroy();
        res.json({ message: 'Жанр успешно удален' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
};

