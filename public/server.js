const express = require('express');
const exphbs = require("express-handlebars");

var app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");