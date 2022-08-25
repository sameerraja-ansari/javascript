
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/colors",(req,res)=>{
  res.json(["Red","Orange","Violet","Yellow","Green"])
})


app.get("/", (req, res) => {
  res.send("I'm in default");
});

app.get("/users", (req, res) => {
  res.send("All Users Here");
});
app.get("/todos", (req, res) => {
  res.send("My Todos Here");
});
app.get("/age", (req, res) => {
  res.send("30");
});
app.get("/emp", (req, res) => {
  res.json([
    {
      fname: "Jaker",
      lname: "Shaikh",
      age: 24,
      empid: "APN301",
    },
    {
      fname:"Nihal",
      lname:"Choudhary",
      age:23,
      empid:"APN302"
    },
    {
      fname:"Sagar",
      lname:"Chavare",
      age:28,
      empid:"APN285"
    },
    {
      fname:"Siddhant",
      lname:"Kamble",
      age:27,
      empid:"APN284"
    }
  ]);
});

app.listen(6369, (req, res) => {
  console.log("Server is running on port 6369");
});

