const express = require('express');
const exphbs = require("express-handlebars");
const mysql = require("mysql");


const PORT = process.env.PORT || 3000;


var app = express();

app.use(express.static(__dirname + "/public"));

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


// updates notDevoured list on first load
app.get("/", function (req, res) {
    connection.query("SELECT * FROM burger;", function (err, data) {
        if (err) {
            res.status(500).end();
        }
        // console.log(data);

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


    // updates notDevoured list when burger input is submitted
    connection.query("SELECT * FROM burger;", function (err, data) {
        if (err) {
            res.status(500).end();
        }
        console.log(data);

        res.render("index", { burger: data });
    });

    console.log('burger added to DB');
});




app.listen(PORT);