"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_handlebars_1 = require("express-handlebars"); //destructure this
const dbConnection = require("../database/config");
const userRoutes = require("../routes/userRoutes");
const app = (0, express_1.default)();
app.use([body_parser_1.default.json()]);
//handlebars
app.engine("handlebars", (0, express_handlebars_1.engine)({ defaultLayout: "main" }));
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
        .catch((err) => {
        console.log(err);
    });
});
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
