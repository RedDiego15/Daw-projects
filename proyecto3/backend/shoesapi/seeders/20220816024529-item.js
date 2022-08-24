'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     for (let i = 0; i <50; i++) {  
      await queryInterface.bulkInsert('Item', [{  
          nombre: 'shoe '+i,  
          descripcion: 'Lorem ipsum lorem ipsum',  
          precio:i+100, 
          stock:i+10  
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Item', null, {});  
  }
};
