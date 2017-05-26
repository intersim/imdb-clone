const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/imdb', {
  logging: false
});

module.exports = db;