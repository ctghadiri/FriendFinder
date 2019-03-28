// Application
    // Takes in data from user via form
        // returns match of another individual
    // Shows all saved individuals

// establish requirements for modules/files
    // express
var express = require('express');
var app = express();

    // routing files
        // api
require('./routing/apiRoutes')(app);
        // html
require('./routing/htmlRoutes')(app);


// establish connection
// setup express to handle data with urlencoded
// add listener