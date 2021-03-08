// Load the module dependencies:
//  config.js module and mongoose module
var config = require('./config'),
    mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function () {

    // Use Mongoose to connect to MongoDB
    const db = mongoose.connect(config.db, {
		useUnifiedTopology: true,
		useNewUrlParser: true, useCreateIndex: true 
		}).then(() => console.log('DB Connected!')) //if it logs this message, Database has been connected.
		.catch(err => {
		console.log('Error');
	});

    // Load the model
    require('../app/models/users.server.model');

    // Return the Mongoose connection instance
    return db;
}