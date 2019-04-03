var friendsData = require('../app/data/friends');
module.exports = function (app){
    app.get('/api/friends', function (req, res){
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res){
        var newFriend = req.body

        var differences = [];

        for(var j = 0; j < friendsData.length; j++){ 
            differences.push(arrDifference(newFriend.scores, friendsData[j].scores));
        };

        
        
        function arrDifference(arr1, arr2){
            var diffArr = [];
            for( var i = 0; i < arr1.length; i++){
                diffArr.push(Math.abs(parseInt(arr1[i]) - parseInt(arr2[i])));
            };            
            return diffArr.reduce(sum);
        }
        
        function sum(total, num){
            return total+num;
        }
        var closestMatch = friendsData[differences.indexOf(Math.min(...differences))];
        friendsData.push(req.body);

        res.json(closestMatch);
    });
}