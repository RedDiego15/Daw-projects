const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedido', {
    idPedido: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'usuario'
      }
    },
    idCompra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'compra',
        key: 'idcompra'
      }
    }
  }, {
    sequelize,
    tableName: 'pedido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPedido" },
        ]
      },
      {
        name: "fk_user_pedido",
        using: "BTREE",
        fields: [
          { name: "usuario" },
        ]
      },
      {
        name: "fk_compra",
        using: "BTREE",
        fields: [
          { name: "idCompra" },
        ]
      },
    ]
  });
};
