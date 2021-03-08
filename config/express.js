// Load the module dependencies
const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

// Define the Express configuration method
module.exports = function () {
    // Create a new Express application instance
    const app = express();

    // Activate the 'morgan' logger middleware
    app.use(morgan('dev'));

    //Using body-parser middleware to parse JSON
    app.use(bodyParser.json());

    // Configure the 'session' middleware
    app.use(session({
        //a session is uninitialized when it is new but not modified
        //force a session that is "uninitialized" to be saved to the store
        saveUninitialized: true,
        //forces the session to be saved back to the session store
        //even if the session was never modified during the request
        resave: true,
        secret: config.sessionSecret // secret used to sign the session ID cookie
    }));

    // Configure the Passport middleware
	app.use(passport.initialize()); // Bootstrapping the passport module
	app.use(passport.session()); // Keep track of user's session
    
    // Load the routing files
    require('../app/routes/register.server.routes.js')(app);
    require('../app/routes/login.server.routes.js')(app);
    require('../app/routes/actions.server.routes.js')(app)
    
    // Return the Express application instance
    return app;

}