const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compra', {
    idCompra: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idItem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cantidad_comprada: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCompra" },
        ]
      },
      {
        name: "fk_item",
        using: "BTREE",
        fields: [
          { name: "idItem" },
        ]
      },
    ]
  });
};
