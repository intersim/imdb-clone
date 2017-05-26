const express = require('express');
const volleyball = require('volleyball');

const db = require('../db');
const Actor = require('../db/models/Actor');

const app = express();

app.use(volleyball);

app.get('/actors', (req, res, next) => 
  Actor.findOne()
  .then(actor => res.send(actor))
  .catch(next)
);

db.sync()
.then(() => 
  app.listen(8080, () => console.log("listening on port 8080..."))
)