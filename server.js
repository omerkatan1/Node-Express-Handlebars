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
    connection.query("SELECT * FROM burger;", function (err, data) {
        if (err) {
            res.status(500).end();
        }
        console.log(data);

        res.render("index", { burger: data });
    });
});


// Inserts into DataBase
app.post("/submit", ({ body }, res) => {
    var burgerNameInput = body.enterBurger;
    console.log(burgerNameInput);

    connection.query('INSERT INTO burger SET ?', { burgerName: burgerNameInput }, function (err) {
        if (err) throw err;

    });
    console.log('burger added to DB');
});




app.listen(PORT);