"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("Tags", [
        {
          name: "yogapractice",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "yogainspiration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "wellness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "nature",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "spiritual",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sport",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "yogateacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
