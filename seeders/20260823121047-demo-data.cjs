'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const now = new Date();

    const admin = await bcrypt.hash('admin123', 10);
    const member = await bcrypt.hash('member123', 10);

    await queryInterface.bulkInsert('Users', [
      { name: 'Joe Neel', email: 'joeneel@elect.test', password: admin, role: 'admin',
      createdAt: now, updatedAt: now },
      { name: 'Neigh Jeel', email: 'neighjeel@elect.test', password: member, role: 'member',
      createdAt: now, updatedAt: now },
      { name: 'Down Ray', email: 'downray@elect.test', password: member, role: 'member',
      createdAt: now, updatedAt: now }
    ]);

    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users";',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const idOf = (name) => users.find((u) => u.name === name).id;

    await queryInterface.bulkInsert('Tasks', [
      { title: 'GT 9: Auth', dueDate: new Date(), completed: false,
      userId: idOf('Joe Neel'), createdAt: now, updatedAt: now },
      { title: 'GT 23423: Auth Testing', dueDate: new Date(), completed: false,
      userId: idOf('Neigh Jeel'), createdAt: now, updatedAt: now },
      { title: 'GT 999999: Auth Take Off', dueDate: new Date(), completed: false,
      userId: idOf('Down Ray'), createdAt: now, updatedAt: now },
      { title: 'GT 10: Books', dueDate: new Date(), completed: false,
      userId: idOf('Down Ray'), createdAt: now, updatedAt: now }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
