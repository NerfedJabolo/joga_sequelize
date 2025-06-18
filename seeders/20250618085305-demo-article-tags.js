"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("ArticleTags", [
        {
          articleId: 9,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 9,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 10,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 10,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 11,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 11,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 11,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ArticleTags", null, {});
  },
};
