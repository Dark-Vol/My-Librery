const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Genre = sequelize.define("Genre", {
    name: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
});

const Book = sequelize.define("Book", {
    title: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    genreId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    bookSeries: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    bookNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    aboutBook: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

Genre.hasMany(Book, { foreignKey: "genreId" });
Book.belongsTo(Genre, { foreignKey: "genreId" });

module.exports = {
    Genre,
    Book
};

