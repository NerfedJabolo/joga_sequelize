"use strict";

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn("Authors", "id", {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      }),
      queryInterface.changeColumn("Authors", "name", {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }),
      queryInterface.changeColumn("Authors", "bio", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },

  down(queryInterface) {
    return Promise.all([queryInterface.dropTable("Authors")]);
  },
};
