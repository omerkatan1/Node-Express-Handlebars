const express = require('express');
const exphbs = require("express-handlebars");
const mysql = require("mysql");




var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// creates mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "omer171015415",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as " + connection.threadId);
})

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO notDevoured (burgerName) VALUES (?)", [req.body.name], function(err, res) {
        if (err) throw err;

        console.log("sucess");
        console.log(res);
    });
});


app.listen(PORT);