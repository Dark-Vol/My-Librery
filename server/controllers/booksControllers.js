const { Op } = require('sequelize');
const { Book, Genre } = require('../models/models');

// GET /api/books - получить все книги
const getAllBooks = async (req, res) => {
    try {
        const { genreId, author, search } = req.query;
        const where = {};
        
        if (genreId) {
            where.genreId = genreId;
        }
        
        if (author) {
            where.author = author;
        }
        
        if (search) {
            where[Op.or] = [
                { title: { [Op.like]: `%${search}%` } },
                { author: { [Op.like]: `%${search}%` } }
            ];
        }
        
        const books = await Book.findAll({
            where,
            include: [{
                model: Genre
            }],
            order: [['title', 'ASC']]
        });
        
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET /api/books/:id - получить книгу по ID
const getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id, {
            include: [{
                model: Genre
            }]
        });
        
        if (!book) {
            return res.status(404).json({ error: 'Книга не найдена' });
        }
        
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST /api/books - создать новую книгу
const createBook = async (req, res) => {
    try {
        const { title, author, genreId, bookSeries, bookNumber, aboutBook } = req.body;
        
        if (!title || !author) {
            return res.status(400).json({ error: 'Название и автор обязательны' });
        }
        
        // Проверяем существование жанра, если указан
        if (genreId) {
            const genre = await Genre.findByPk(genreId);
            if (!genre) {
                return res.status(400).json({ error: 'Жанр не найден' });
            }
        }
        
        const book = await Book.create({
            title,
            author,
            genreId: genreId || null,
            bookSeries: bookSeries || null,
            bookNumber: bookNumber || null,
            aboutBook: aboutBook || null
        });
        
        // Загружаем книгу с жанром для ответа
        const bookWithGenre = await Book.findByPk(book.id, {
            include: [{
                model: Genre
            }]
        });
        
        res.status(201).json(bookWithGenre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT /api/books/:id - обновить книгу
const updateBook = async (req, res) => {
    try {
        const { title, author, genreId, bookSeries, bookNumber, aboutBook } = req.body;
        const book = await Book.findByPk(req.params.id);
        
        if (!book) {
            return res.status(404).json({ error: 'Книга не найдена' });
        }
        
        if (title !== undefined) book.title = title;
        if (author !== undefined) book.author = author;
        if (genreId !== undefined) {
            // Проверяем существование жанра, если указан
            if (genreId) {
                const genre = await Genre.findByPk(genreId);
                if (!genre) {
                    return res.status(400).json({ error: 'Жанр не найден' });
                }
            }
            book.genreId = genreId || null;
        }
        if (bookSeries !== undefined) book.bookSeries = bookSeries;
        if (bookNumber !== undefined) book.bookNumber = bookNumber;
        if (aboutBook !== undefined) book.aboutBook = aboutBook;
        
        await book.save();
        
        // Загружаем книгу с жанром для ответа
        const bookWithGenre = await Book.findByPk(book.id, {
            include: [{
                model: Genre
            }]
        });
        
        res.json(bookWithGenre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE /api/books/:id - удалить книгу
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        
        if (!book) {
            return res.status(404).json({ error: 'Книга не найдена' });
        }
        
        await book.destroy();
        res.json({ message: 'Книга успешно удалена' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};

