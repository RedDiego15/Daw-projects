"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class item extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(
			models
		) {
			// define association here
		}
	}
	item.init(
		{
			idItem: DataTypes.INTEGER,
			nombre: DataTypes.STRING,
			category: DataTypes.STRING,
			descripcion: DataTypes.STRING,
			precio: DataTypes.INTEGER,
			stock: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "item",
		}
	);
	return item;
};
