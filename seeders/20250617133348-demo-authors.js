"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("Authors", [
        {
          name: "Sten Kahu",
          bio: "Tech enthusiast dealing with optimized web development",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("Authors", [
        {
          name: "Jane Austen",
          bio: "Deeply passionate about exploring Pride and Prejudice",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("Authors", [
        {
          name: "Srinivasa Ramanujan",
          bio: "In love with God's equations.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Authors", null, {});
  },
};
