const winston = require("winston");

// Logging levels -
// error: Logs errors, which are typically the most severe issues.
// warn: Logs warnings, which indicate something may be wrong but not necessarily critical.
// info: Logs general information, such as the normal flow of the application.
// http: Logs HTTP request-related data.
// verbose: Logs more detailed information, usually for debugging.
// debug: Logs low-level debugging messages.
// silly: Logs the most verbose information, used for highly detailed debugging.

// The level specifies the minimum log level to record. Logs with a level equal or greater than info will be captured.

// Example explanation:
// If you set the minimum log level to info, this means only logs with a level equal to or higher than info will be captured.
// In other words:
// info and above (such as warn, error) will be recorded.
// debug, verbose, and silly logs will be ignored.

// Winston logger instance
const logger = winston.createLogger({
  level: "info", // Logging level, info, warn and error logs will be stored.
  format: winston.format.json(), // Store each logs in json format
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }), // Define where your logs are saved. The Console transport outputs logs to the console, and File writes logs to combined.log.
    new window.transports.File({ filename: "combined.log" }), // Write the generated log in combined.log
  ],
});
