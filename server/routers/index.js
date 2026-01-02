const Router = require("express");
const genres = require("./genresRoutes");
const books = require("./booksRoutes");

// Базовый маршрут для проверки работы API
const router = new Router();
router.get('/', (req, res) => {
    res.send('API is working');
});

router.use("/genres", genres);
router.use("/books", books);

module.exports = router;



