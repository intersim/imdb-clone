const db = require('../db');
const Sequelize = require('Sequelize');

const Actor = db.define('actors', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  last_name: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  gender: {
    type: Sequelize.STRING,
    defaultValue: null
  }
});

module.exports = Actor;