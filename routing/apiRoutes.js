var friendsData = require('../app/data/friends');

module.exports = function (app){
    app.get('/survey', function (req, res){
        res.json(friendsData);
    });

    app.post('/survey', function (req, res){
        friendsData.push(req.body);
        res.json(friendsData);
    });
}