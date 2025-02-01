const express = require("express");
require("dotenv").config;
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const logger = require("./utils/logger");

// Create writable stream that logs file
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: "./logs", // stores access.log in ./logs
});

const app = express();
const port = process.env.PORT || 3000;

// Express middlewares
app.use(
  morgan("combined", {
    stream: accessLogStream, // Pass http requests logs to accessLogStream
  })
);

app.use(
  morgan("combined", {
    stream: {
      write: (message) => {
        logger.info(message.trim());
      },
    },
  })
);

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
