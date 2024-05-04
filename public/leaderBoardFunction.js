getData();

function getData() {
    $.ajax({
        url: gameURL + '/getGameData', 
        type: 'get',
        success: function(response){
            var data = JSON.parse(response);
            if(data.msg == "SUCCESS"){
                createLeaderboard(data.games);
            }
            
            
        },
        error: function(err){
            alert(err);
        }
    });
}

function getTodayData(){
    $.ajax({
        url: gameURL + '/getTodayData', 
        type: 'get',
        success: function(response){
            var data = JSON.parse(response);
            if(data.msg == "SUCCESS"){
                createLeaderboard(data.games);
            }
            
            
        },
        error: function(err){
            alert(err);
        }
    });
}

function getWeekData(){
    $.ajax({
        url: gameURL + '/getWeekData', 
        type: 'get',
        success: function(response){
            var data = JSON.parse(response);
            if(data.msg == "SUCCESS"){
                createLeaderboard(data.games);
            }
            
            
        },
        error: function(err){
            alert(err);
        }
    });
}

function getHighestData(){
    $.ajax({
        url: gameURL + '/getHighestData', 
        type: 'get',
        success: function(response){
            var data = JSON.parse(response);
            if(data.msg == "SUCCESS"){
                createLeaderboard(data.games);
            }
            
            
        },
        error: function(err){
            alert(err);
        }
    });
}

function createLeaderboard(gamesData){
    //console.log(gamesData);
    
    var gamesHTML = "";

    for (var i = 0; i < gamesData.length; i++){
        gamesHTML += "<tr>";

        //gamesHTML += "<td>" + gamesData[i].games_id +"</td>";
        gamesHTML += "<td>" + gamesData[i].player_name +"</td>";
        gamesHTML += "<td>" + gamesData[i].player_score +"</td>";
        gamesHTML += "<td>" + gamesData[i].game_date +"</td>";
        
        gamesHTML += "</tr>";

    }
    
    gamesHTML = gamesHTML.replaceAll("T04:00:00.000Z", ""); //changes game_date to be in YYYY-MM-DD format

    $("#boardBody").html(gamesHTML);
}

const todayRadio = document.getElementById('todayRadio');
const weekRadio = document.getElementById('weekRadio');
const highRadio = document.getElementById('highestRadio');
const noneRadio = document.getElementById('noneRadio');

noneRadio.checked = true; //Since getData() gets called when the page loads, noneRadio should be checked when the page loads

function todayRadioFunc(){
    weekRadio.checked = false;
    highRadio.checked = false;
    noneRadio.checked = false;

    getTodayData();
}

function weekRadioFunc(){
    todayRadio.checked = false;
    highRadio.checked = false;
    noneRadio.checked = false;

    getWeekData();
}

function highestRadioFunc(){
    weekRadio.checked = false;
    todayRadio.checked = false;
    noneRadio.checked = false;

    getHighestData();
}

function noneRadioFunc(){
    weekRadio.checked = false;
    todayRadio.checked = false;
    highRadio.checked = false;

    getData();
}