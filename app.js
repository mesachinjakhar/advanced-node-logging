const express = require("express");
require("dotenv").config;

const app = express();
const port = process.env.PORT || 3000;

// Route handler
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: true, message: "request recieved successfully" });
});

// Starting server
app.listen(port, () => {
  console.log("Server started at port:", port);
});
