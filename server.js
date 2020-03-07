const express = require('express');
const exphbs = require("express-handlebars");
// const mysql = require("mysql");




var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// creates mysql connection
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: "omer171015415",
//     database: "burger_db"
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as " + connection.threadId);
// })

app.get("/", function(req, res) {
    res.render("index");
});


app.listen(PORT);