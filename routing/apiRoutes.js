var friendsData = require('../app/data/friends');

module.exports = function (app){
    app.get('/api/friends', function (req, res){
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res){
        friendsData.push(req.body);

        var differences = [];

        for(var j = 0; j < req.body.scores.length; j++){ 
            differences.push(arrDifference(req.body.scores, friendArray[j].scores));
        
        };

        // for(var k = 0; k < differences.length; k++){
        //     if(differences[k] === Math.min(differences)){
        //         return friendsData[k];
        //     }
        // }
        friendsData[differences.indexOf(Math.min(...differences))]


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
        res.json(friendsData[differences.indexOf(Math.min(...differences))]
        );
    });
}