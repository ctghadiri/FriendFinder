var friendsData = require('../app/data/friends');
console.log("friendsdata length:" + friendsData.length)
module.exports = function (app){
    app.get('/api/friends', function (req, res){
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res){
        var newFriend = req.body
        console.log("this is newfriend" + newFriend)
        // res.json(friendsData);

        var differences = [];

        for(var j = 0; j < friendsData.length; j++){ 
            differences.push(arrDifference(newFriend.scores, friendsData[j].scores));
            console.log(newFriend.scores + 'hi')
        };

        
        
        function arrDifference(arr1, arr2){
            var diffArr = [];
            for( var i = 0; i < arr1.length; i++){
                diffArr.push(Math.abs(parseInt(arr1[i]) - parseInt(arr2[i])));
            };
            
            console.log(diffArr)
            
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