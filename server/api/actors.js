const { Actor, Role } = require('../../db');

module.exports = require('express').Router()
  .get('/', (req, res, next) => 
    Actor.findAll({
      where: req.query,
      limit: 50,
      // include: [ Role ]
    })
    .then(actors => res.send(actors))
    .catch(next)  
);