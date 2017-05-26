/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directors_genres', {
    director_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    prob: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    tableName: 'directors_genres'
  });
};
