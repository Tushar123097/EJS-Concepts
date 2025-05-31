const express = require("express");
//This will import the Express framework

const app = express();
//this create an epress an express application
const path = require("path");
//importing Node path module used for handling file and directory paths

const port = 8080;
//this sets the port number your server will listening on

app.set("view engine", "ejs");

//this tell express to use EJS as the template engine for rendring views

app.set("views", path.join(__dirname, "/views"));
// set the folder name where your EJS templates (views)
app.get("/", (req, res) => {
    res.render("home"); 
});
//ye to render kiya hairolldice folder me jaana padega
app.get("/rolldice", (req, res) => {
    res.render("rolldice");
});
//ye to direct send kar diya 
app.get("/house", (req, res) => {
    res.send("kuch bhi bhai bhej de kya hee pharak padta hai")
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    res.render("instagram.ejs", {username, followers: 120})
   
});

app.get("/students", (req, res) => {
    const students = [
        {name : "Amit", grade: "A"},
        {name: "Priya", grade: "B"},
        {name: "Rahul", grade: "A+"},
        {name: "Sristhi", grade: "C"}
    ];
    res.render("students", { students });
})


//defines a route for the root URL ("/").When someone visit locallhost8080
//express will rener the homw.ejs file from the views folder and send the HTML to the browser.

//this is for starting the server on port
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});