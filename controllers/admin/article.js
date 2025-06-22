const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:qwerty@localhost:3306/joga_sequelize"
);

const models = require("../../models");

const createArticle = (req, res) => {
  let { name, slug, image, body } = req.body;

  const newArticle = models.Article.create({
    name: name,
    slug: slug,
    image: image,
    body: body,
    published: new Date().toISOString().slice(0, 19).replace("T", " "),
  })
    .then((article) => {
      console.log(article);
      return res.status(200).json({ message: "New article is added" });
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

const updateArticle = async (req, res) => {
  if (req.method === "GET") {
    models.Article.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        { model: models.Author },
        {
          model: models.Tag,
          through: { model: models.ArticleTag },
        },
      ],
    })
      .then((article) => {
        return res.status(200).json({ article });
      })
      .catch((error) => {
        return res.status(500).send(error.message + " Error is here");
      });
  }

  if (req.method === "POST") {
    const articleId = req.params.id;
    const { name, slug, image, body, author } = req.body;

    try {
      if (!author) {
        return res.status(400).json({ error: "Author name is required." });
      }

      // ✅ Find or create the author using string `author`
      let foundAuthor = await models.Author.findOne({
        where: { name: author },
      });

      if (!foundAuthor) {
        foundAuthor = await models.Author.create({
          name: author,
          bio: "", // or set a default bio
        });
      }

      // ✅ Update the article
      await models.Article.update(
        {
          name: name,
          slug: slug,
          image: image,
          body: body,
          AuthorId: foundAuthor.id,
        },
        {
          where: { id: articleId },
        }
      );

      return res.status(200).json({ message: "Article and author updated" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

module.exports = {
  createArticle,
  updateArticle,
};