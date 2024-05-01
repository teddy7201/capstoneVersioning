getData();

function getData() {
    $.ajax({
        url: gameURL + '/public/leaderboardScreen.html',
        type: 'get',
        dataType: 'json',
        success: function(response){
            var data = JSON.parse(response);
                if(data.msg == "SUCCESS"){
                    createLibraryTable(data.games);
                }
            
        },
        error: function(err){
            alert(err);
        }
    });
}

function createLeaderboard(gamesData){
    console.log(gamesData);
    
    var gamesHTML = "";

    for (var i = 0; i < gamesData.length; i++){
        gamesHTML += "<tr>";

        gamesHTML += "<td>" + gamesData[i].games_id +"</td>";
        gamesHTML += "<td>" + gamesData[i].player_name +"</td>";
        gamesHTML += "<td>" + gamesData[i].player_score +"</td>";
        gamesHTML += "<td>" + gamesData[i].game_date +"</td>";
        
        gamesHTML += "</tr>";

    }

    $("#boardBody").html(gamesHTML);
}