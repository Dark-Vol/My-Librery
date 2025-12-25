const express = require('express');
const router = express.Router();

// Базовый маршрут для проверки работы API
router.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

// Здесь можно добавить другие маршруты
// Например:
// router.use('/books', require('./books'));
// router.use('/users', require('./users'));

module.exports = router;

