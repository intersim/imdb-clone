/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actors', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    },
    gender: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: 'NULL'
    }
  }, {
    tableName: 'actors'
  });
};
