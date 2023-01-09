"use strict";
module.exports = {
	async up(
		queryInterface,
		Sequelize
	) {
		await queryInterface.createTable(
			"items",
			{
				idItem: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				nombre: {
					type: Sequelize.STRING,
				},
				category: {
					type: Sequelize.STRING,
				},
				descripcion: {
					type: Sequelize.STRING,
				},
				precio: {
					type: Sequelize.INTEGER,
				},
				stock: {
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
			"items"
		);
	},
};
