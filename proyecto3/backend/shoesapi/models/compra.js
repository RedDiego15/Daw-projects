"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class compra extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(
			models
		) {
			// define association here
			compra.belongsTo(
				models.pedido,
				{
					foreignKey: "idCompra",
				}
			);
		}
	}
	compra.init(
		{
			idCompra: DataTypes.INTEGER,
			idItem: DataTypes.INTEGER,
			cantidad_comprada: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "compra",
		}
	);
	return compra;
};
