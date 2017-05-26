const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/imdb', {
  define: {
        timestamps: false,
        underscored: true
    }
});

module.exports = db;