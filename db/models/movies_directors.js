/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movies_directors', {
    director_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'movies_directors'
  });
};
