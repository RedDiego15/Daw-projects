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
			let i = 0;
			i <
			10;
			i++
		) {
			await queryInterface.bulkInsert(
				"usuarios",
				[
					{
						usuario: `username-${i}`,
						contrasena: "e1d883b3ad0e2679950314ddb1ea8fc4f67ae97d",
						metodo: `sha1`,
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
