const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:qwerty@localhost:3306/joga_sequelize"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connect to the database");
  })
  .catch((err) => {
    console.error("Unable to connect to the database", err);
  });

const articleRouter = require("./routes/article");
app.use("/", articleRouter);
app.use("/article", articleRouter);
app.use("/admin/article", articleRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to sequelize application." });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})