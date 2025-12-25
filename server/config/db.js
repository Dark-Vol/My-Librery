const { Sequelize } = require('sequelize');

// Настройки подключения к базе данных
// Замените эти значения на ваши реальные настройки
const sequelize = new Sequelize(
    'mylibrary',
    'root',
    '', 
    {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
    }
);

module.exports = sequelize;

