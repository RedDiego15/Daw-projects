"use strict";
module.exports = {
	async up(
		queryInterface,
		Sequelize
	) {
		await queryInterface.createTable(
			"clientes",
			{
				idCliente: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				usuario: {
					type: Sequelize.STRING,
					onDelete: "CASCADE",
					References: {
						model: "usuarios",
						key: "usuario",
					},
				},
				nombre: {
					type: Sequelize.STRING,
				},
				apellido: {
					type: Sequelize.STRING,
				},
				direccion: {
					type: Sequelize.STRING,
				},
			}
		);
	},
	async down(
		queryInterface,
		Sequelize
	) {
		await queryInterface.dropTable(
			"clientes"
		);
	},
};
