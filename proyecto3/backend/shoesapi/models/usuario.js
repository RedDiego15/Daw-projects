const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    contrasena: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    metodo: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usuario" },
        ]
      },
    ]
  });
};
