module.exports = function (app) {
    
    // Load the controller file
    var register = require("../controllers/register.server.controller");

    // Get request made
    app.post('/api/add-user', register.signup);
}