/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movies', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rank: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    tableName: 'movies'
  });
};
