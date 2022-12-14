import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { Sequelize } from "sequelize";
import { engine } from "express-handlebars"; //destructure this

const dbConnection = require("../database/config");
const userRoutes = require("../routes/userRoutes");

const app = express();

app.use([bodyParser.json()]);

//handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes register
app.use([userRoutes]);

const PORT = process.env.PORT || 5000;
//database,username,password,host,dialect:db name/using

app.listen(PORT, () => {
  console.log(`Port Connected to ${PORT}`);

  //db connection
  dbConnection
    .authenticate()
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err: string) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
