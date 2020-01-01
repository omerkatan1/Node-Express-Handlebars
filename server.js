const express = require('express');
const exphbs = require("express-handlebars");
const mysql = require("mysql");


var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    res.render("index");
});


app.listen(PORT);