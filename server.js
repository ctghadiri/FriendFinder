// Application
    // Takes in data from user via form
        // returns match of another individual
    // Shows all saved individuals

// establish requirements for modules/files
    // express
var express = require('express');
var app = express();

// establish port to use
var PORT = process.env.PORT || 3000;

// setup express to handle data with urlencoded
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

    // routing files
        // api
require('./routing/apiRoutes')(app);
        // html
require('./routing/htmlRoutes')(app);


// add listener
app.listener(PORT, function (){
    console.log("App listening on PORT: " + PORT);
});