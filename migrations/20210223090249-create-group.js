'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER

      },
      membernumber: {
        type: Sequelize.INTEGER
      },
      groupname: {
        type: Sequelize.STRING
      },
      groupid: {
        type: Sequelize.INTEGER
        // ,
        // references: {
        //   model: "multigroup",
        //   key: "groupid"
        // }
      },
      totalcost: {
        type: Sequelize.INTEGER
      },
      notice: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('groups');
  }
};