const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

const con = mysql.createConnection({ //function to connect to the database
    host: "localhost",
    user: "root",
    password: "Devang1234",
    database: "mydb",
});

con.connect(function(err){ // create database and table
    if (err) throw err;
    console.log("Connected!");
    // var sql = "CREATE DATABASE mydb";
    // var sql = "CREATE TABLE materials (id int auto_increment not null, name varchar(255) not null, volume int not null, cost float(4) not null, deliveryDate date not null, color varchar(10) not null, PRIMARY KEY(id))";
    // con.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log("Database created!");
    //     console.log("Table created!");
    // });
});

app.get("/api/get", (req, res) => { //api get call to select all rows from the table
    const sql = "SELECT * FROM materials";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(result);
    });
})

app.get("/api/get/costs", (req, res) => { //api get call to get total cost of all materials
    const sql = "SELECT SUM(volume*cost)AS totalCost FROM materials";
    con.query(sql, function(err, result) {
        if (err) throw err;
        res.send(result);
    })
})

app.post("/api/insert", (req, res) => { //api post call to insert a row to the table
    const name = req.body.name;
    const volume = req.body.volume;
    const cost = req.body.cost;
    const deliveryDate = req.body.date;
    const color = req.body.color;
    const sql = "INSERT INTO materials (name, volume, cost, deliveryDate, color) VALUES(?, ?, ?, ?, ?)";
    con.query(sql, [name, volume, cost, deliveryDate, color], function(err, result) {
        console.log(result)
        if (err) throw err;
        console.log("Inserted into database!");

    });
});

app.delete("/delete/:id", (req, res) => { //api delete call to delete a row from the table
    const id = req.params.id
    con.query("DELETE FROM materials WHERE id = ?", id, function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log("Deleted row from database!")
    });
})

const PORT = process.env.PORT || 5000 // selects 5000 unless another port is specified by the user
app.listen(PORT, () => console.log(`Server Listening on ${PORT}...`))