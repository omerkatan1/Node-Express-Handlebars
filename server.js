const express = require('express');
const mysql = require("mysql");


const PORT = process.env.PORT || 8000;


var app = express();

// app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var dbURL = "mysql://wozm56icmcbpzm6x:advq4xp5cto60520@lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/c2otzsk5wz6lu5mu";


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

// var connection = mysql.createConnection(dbURL);

// connection.connect();


// Inserts into DataBase
app.post("/submit", ({ body }, res) => {
    var burgerNameInput = body.enterBurger;
    console.log(burgerNameInput);

    connection.query('INSERT INTO burger SET ?', { burgerName: burgerNameInput }, function (err) {
        if (err) throw err;
    });


    // updates notDevoured list when burger input is submitted
    connection.query("SELECT * FROM burger", function (err, data) {
        if (err) throw err;
        console.log(data);

        res.render("index", { burger: data });
        // res.redirect("/");
    });

    console.log('burger added to DB');
});

// updates notDevoured list on first load
app.get("/", function (req, res) {
    connection.query("SELECT * FROM burger;", function (err, data) {
        // if (err) {
        //     res.status(500).end();
        // }

        if (err) throw err;
        // console.log(data);

        res.render("index", { burger: data });
    });
});




app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
});
