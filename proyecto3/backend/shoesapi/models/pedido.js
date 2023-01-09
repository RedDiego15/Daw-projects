"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class pedido extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(
			models
		) {
			// define association here
			pedido.hasMany(
				models.compra,
				{
					foreignKey: "idCompra",
				}
			);
			pedido.hasOne(
				models.cliente,
				{
					foreignKey: "usuario",
				}
			);
		}
	}
	pedido.init(
		{
			idPedido: DataTypes.INTEGER,
			usuario: DataTypes.STRING,
			idCompra: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "pedido",
		}
	);
	return pedido;
};
