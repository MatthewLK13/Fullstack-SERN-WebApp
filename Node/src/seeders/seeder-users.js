'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Users', [
      {
        email: 'example@example.com',
        password: '123456',
        firstName: 'Khoi',
        lastName: 'Luong',
        address: 'USA',
        gender: 1,
        roleId: 'BS',
        phonenumber: '032132134124',
        positionId:'TK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
