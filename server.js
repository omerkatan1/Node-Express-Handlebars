const express = require('express');
const exphbs = require("express-handlebars");
const mysql = require("mysql");




var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// creates sql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as " + connection.threadId);
})

app.get("/", function (req, res) {
    connection.query("SELECT * FROM notDevoured;", function (err, data) {
        if (err) throw err;

        res.render("index", { notDevoured: data });
    });
});


app.post("/submit", ({ body }, res) => {
    var burgerName = body.enterBurger;
    console.log(burgerName);

    connection.query("INSERT INTO notDevoured (burgerName) VALUES = ?", [burgerName], function(err, result) {
        if (err) throw err;

        res.json(result.data);
    })
});




app.listen(PORT);