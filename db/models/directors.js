/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('directors', {
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
    }
  }, {
    tableName: 'directors'
  });
};
