/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    actor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'NULL'
    }
  }, {
    tableName: 'roles'
  });
};
