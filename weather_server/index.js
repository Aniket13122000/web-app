const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "@123",
    database: "data"
});

app.post('/register', (req,res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO user (name, password) VALUES(?, ?) ", [username, password], (err, result) => {
        console.log(err);
    });
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM user WHERE name = ? AND password = ? ", [username, password], (err, result) => {
        if(err){
            res.send({err: err})
        }

        if(result.length > 0){
            res.send(result)
        }else{
            res.send({message: "Wrong username and password."})
        }
    });
})

app.listen(3002, () => {
    console.log("Server running!")
});
