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
				"clientes",
				[
					{
						usuario: `username-${i}`,
						nombre: `name-${i}`,
						apellido: `lastname-${i}`,
						direccion: "urdernor 2",
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
