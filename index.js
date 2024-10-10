import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import fs from "fs";

const app = express();
const port = 3000;
let numofPC = 0;
let numofNPC = 0;
app.use(bodyParser.urlencoded({extended:true}));

let diceNum = 4;
let diceRoll = Math.floor(Math.random() * 4) + 1;
let id = 0;


app.get("/", (req,res) => {
    res.render(__dirname + "/home.ejs",{num:numofPC, numNPC:numofNPC});
});

app.post("/addPC", (req,res) => { //Change to a function
    numofPC += 1;
    res.redirect("/");
   
});

app.post("/addNPC", (req,res) => {
    numofNPC += 1;
    res.redirect("/");
});

app.post("/deletePC", (req,res) => {
    const ID = req.body["pID"];
    pc.splice(ID, 1);
    res.redirect('/');
});


app.listen(port, () => {
    console.log(`Listening to Port: ${port}`)
});