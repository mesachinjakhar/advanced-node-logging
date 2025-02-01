const express = require("express");
require("dotenv").config;
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

// Express middlewares
app.use(morgan("dev"));

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
