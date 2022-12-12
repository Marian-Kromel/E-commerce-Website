const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const signup = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "users", //database name
});

signup.use(cors());
signup.use(express.json()); //grab info in json 
signup.use(bodyParser.urlencoded({
    extended: true
}))
signup.get('/api/get', (req, res) => {
    const sqlSelect =
        "SELECT * FROM signup";
    db.query(sqlSelect, (err, result) => {
        // res.send("Hello World"); //res: is response is send to frontend
        // console.log(result); 
        res.send(result);
    });
})
signup.post("/api/insert", (req, res) => {
    const fn = req.body.fn;
    const ln = req.body.ln;
    const mail = req.body.mail;
    const pass = req.body.pass;
    const cpass = req.body.cpass;
    //require: Get info fro6m frontend  , response
    const sqlInsert =
        "INSERT INTO signup (fn,ln,mail,pass,cpass) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [fn, ln, mail, pass, cpass], (err, result) => {
        // res.send("Hello World"); //res: is response is send to frontend
        console.log(result);
    });
});

signup.listen(3001, () => {
    console.log("Running on port 3001");
});