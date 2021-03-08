process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Load the 'mongoose' and 'express' modules
const configurePassport = require('./config/passport');
var mongoose = require('./config/mongoose'),
    express = require('./config/express');

// Create a new Express application instance
var db = mongoose();
const app = express();

// Configure the Passport middleware
const passport = configurePassport();

// Use the Express application instance to listen to the '3030' port
app.listen(3030);

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;

// Log the server status to the console
console.log("Server running at http://localhost:3030/");