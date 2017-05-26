/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movies_genres', {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    }
  }, {
    tableName: 'movies_genres'
  });
};
