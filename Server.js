const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("my server ...");
});

app.listen(3030, (req, res) => {
  console.log("server is runing on port 3030");
});
