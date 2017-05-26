const Sequelize = require('sequelize');
const db = require('./db');

const Actor = require('./models/actors')(db, Sequelize);
const Director = require('./models/directors')(db, Sequelize);
const Movie = require('./models/movies')(db, Sequelize);
const Role = require('./models/roles')(db, Sequelize);
const MovieGenre = require('./models/movies_genres')(db, Sequelize);

// what?
// https://github.com/sequelize/sequelize/issues/1026
Role.removeAttribute('id');

Actor.hasMany(Role, {
  foreignKey: 'id',
  targetKey: 'actor_id'
});

Role.belongsTo(Actor, {
  foreignKey: 'actor_id',
  targetKey: 'id'
});

// Movie.hasMany(Role);

// Movie.belongsToMany(Director, { through: MovieGenre });
// Director.belongsToMany(Movie, { through: MovieGenre });

module.exports = { db, Actor, Director, Movie, Role };