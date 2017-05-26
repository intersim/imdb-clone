const express = require('express');
const volleyball = require('volleyball');
const Sequelize = require('sequelize');
const { db, Actor } = require('../db');

const app = express();

app.use(volleyball);

app.use('/api/actors', require('./api/actors'));
app.use('/api/roles', require('./api/roles'));

db.sync()
.then(() => 
  app.listen(8080, () => console.log("listening on port 8080..."))
)