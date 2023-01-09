"use strict";
module.exports = {
	async up(
		queryInterface,
		Sequelize
	) {
		await queryInterface.createTable(
			"pedidos",
			{
				idPedido: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				usuario: {
					type: Sequelize.STRING,
					onDelete: "CASCADE",
					References: {
						model: "cliente",
						key: "usuario",
					},
				},
				idCompra: {
					type: Sequelize.INTEGER,
					onDelete: "CASCADE",
					References: {
						model: "pedido",
						key: "idCompra",
					},
				},
			}
		);
	},
	async down(
		queryInterface,
		Sequelize
	) {
		await queryInterface.dropTable(
			"pedidos"
		);
	},
};
