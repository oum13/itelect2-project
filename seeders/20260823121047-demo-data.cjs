'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      { name: 'John Doe', email: 'johndoe@elect.test',
      createdAt: now, updatedAt: now },
      { name: 'Jane Doe', email: 'janedoe@elect.test',
      createdAt: now, updatedAt: now },
      { name: 'Anonymous', email: 'anon@elect.test',
      createdAt: now, updatedAt: now }
    ]);

    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users";',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const idOf = (name) => users.find((u) => u.name === name).id;

    await queryInterface.bulkInsert('Tasks', [
      { title: 'GT 5: Testing', dueDate: new Date(), completed: false,
      userId: idOf('John Doe'), createdAt: now, updatedAt: now },
      { title: 'GT 123: Advanced Testing', dueDate: new Date(), completed: false,
      userId: idOf('Jane Doe'), createdAt: now, updatedAt: now },
      { title: 'GT 999: Rocket Science', dueDate: new Date(), completed: false,
      userId: idOf('Anonymous'), createdAt: now, updatedAt: now },
      { title: 'GT 0: Pilot', dueDate: new Date(), completed: false,
      userId: idOf('Anonymous'), createdAt: now, updatedAt: now }
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
