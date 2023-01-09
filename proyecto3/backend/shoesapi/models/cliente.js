"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class cliente extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(
			models
		) {
			// define association here
			cliente.belongsTo(
				models.usuario,
				{
					foreignKey: "usuario",
					as: "user",
				}
			);
			cliente.hasMany(
				models.pedido,
				{
					foreignKey: "usuario",
				}
			);
		}
	}
	cliente.init(
		{
			idCliente: DataTypes.INTEGER,
			usuario: DataTypes.STRING,
			nombre: DataTypes.STRING,
			apellido: DataTypes.STRING,
			direccion: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "cliente",
		}
	);
	return cliente;
};
