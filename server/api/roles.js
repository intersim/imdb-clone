const { Actor, Role } = require('../../db');

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
  Role.findAll({
    where: req.query
  })
  .then(roles => res.send(roles))
  .catch(next)
);