var DataTypes = require("sequelize").DataTypes;
var _cliente = require("./cliente");
var _compra = require("./compra");
var _item = require("./item");
var _pedido = require("./pedido");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var cliente = _cliente(sequelize, DataTypes);
  var compra = _compra(sequelize, DataTypes);
  var item = _item(sequelize, DataTypes);
  var pedido = _pedido(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  pedido.belongsTo(cliente, { as: "usuario_cliente", foreignKey: "usuario"});
  cliente.hasMany(pedido, { as: "pedidos", foreignKey: "usuario"});
  pedido.belongsTo(compra, { as: "idCompra_compra", foreignKey: "idCompra"});
  compra.hasMany(pedido, { as: "pedidos", foreignKey: "idCompra"});
  cliente.belongsTo(usuario, { as: "usuario_usuario", foreignKey: "usuario"});
  usuario.hasMany(cliente, { as: "clientes", foreignKey: "usuario"});

  return {
    cliente,
    compra,
    item,
    pedido,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
