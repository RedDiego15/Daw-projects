"use strict";
module.exports = {
	async up(
		queryInterface,
		Sequelize
	) {
		await queryInterface.createTable(
			"usuarios",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				usuario: {
					type: Sequelize.STRING,
				},
				contrasena: {
					type: Sequelize.STRING,
				},
				metodo: {
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
			"usuarios"
		);
	},
};
