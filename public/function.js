var gameURL = 'http://localhost:3000';

function toLeaderboard(){
    window.location.href = gameURL + '/public/leaderboardScreen.html';
}

function goHome(){
    window.location.href = gameURL + '/public/airhockey.html';
}

function saveName(){
    var playerName = document.getElementById("playerName").value;
    localStorage.setItem('playerName', playerName);
}

function getName(){
    var playerName = localStorage.getItem('playerName');
    return playerName;
}

function sendData() {
    const d = new Date();
    var dateDB = d.toISOString().slice(0, 19).replace('T', ' ');

    var games_id = 'DEFAULT';
    var player_name = playerName;
    var player_score = points;
    var game_date = dateDB; //Seems to be off by 4 hours, function might be using a different time zone
    
    var jsonString = {
        games_id: games_id, 
        player_name: player_name, 
        player_score: player_score, 
        game_date: game_date
    };

    $.ajax({
        url: gameURL + "/public/gameArea.html",
        type: "post",
        data: jsonString,
        success: function(response){
            var data = JSON.parse(response);
            if (data.msg == "SUCCESS"){
                console.log("Data Entered");
            }
            else{
                console.log(data.msg);
            }
            console.log(response);
        },
        error: function(err){
            console.log(err);
        }
    });

    return false;
};

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

function formatDate(date) {
    var date = new Date(date),
        month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
