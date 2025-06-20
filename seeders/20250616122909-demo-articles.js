"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("Articles", [
        {
          name: "Introduction to Ashtanga",
          slug: "introduction-ashtanga",
          image: "ashtanga.jpg",
          body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
          published: "2020-01-08 15:02:30",
          author_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("Articles", [
        {
          name: "Morning Vinyasa flow routine",
          slug: "morning-vinyasa-flow",
          image: "morning.jpg",
          body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
          published: "2020-04-14 15:02:41",
          author_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert("Articles", [
        {
          name: "Secrets of a yoga teacher",
          slug: "secrets-of-a-yoga-teacher",
          image: "yoga-teacher.jpg",
          body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
          published: "2020-04-29 15:02:55",
          author_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Articles", null, {});
  },
};
