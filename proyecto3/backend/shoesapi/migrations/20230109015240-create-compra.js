"use strict";
module.exports = {
	async up(
		queryInterface,
		Sequelize
	) {
		await queryInterface.createTable(
			"compras",
			{
				idCompra: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				idItem: {
					type: Sequelize.INTEGER,
					onDelete: "CASCADE",
					References: {
						model: "item",
						key: "idItem",
					},
				},
				cantidad_comprada: {
					type: Sequelize.INTEGER,
				},
			}
		);
	},
	async down(
		queryInterface,
		Sequelize
	) {
		await queryInterface.dropTable(
			"compras"
		);
	},
};
