require("dotenv").config();
const express = require("express");

const sequelize = require("./db.js");

const models = require("./models/models.js");

const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "working" });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
