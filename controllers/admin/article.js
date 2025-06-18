const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:qwerty@localhost:3306/joga_sequelize"
);

const models = require("../../models");
const article = require("../../models/article");

const createArticle = (req,res) => {
    let {name,slug,image,body} = req.body

    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0,19).replace("T", " ")
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({message: "New article is added"})
    })
    .catch(error => {
        return res.status(500).send(error.message)
    })
}

module.exports = {
    createArticle
}