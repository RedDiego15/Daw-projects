"use strict";

module.exports = {
	async up(
		queryInterface,
		Sequelize
	) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		for (
			let i = 4;
			i <
			10;
			i++
		) {
			await queryInterface.bulkInsert(
				"pedidos",
				[
					{
						idCompra: i,
						usuario: `username-${i}`,
					},
				],
				{}
			);
		}
	},

	async down(
		queryInterface,
		Sequelize
	) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
