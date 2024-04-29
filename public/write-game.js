
$('#data-submit').click(function() {
    var games_id = $('games_id').val();
    var player_name = $('#player_name').val();
    var player_score = $('#player_score').val();
    var game_date = $('#game_date').val();
    
    var jsonString = {games_id: games_id, player_name: player_name, player_score: player_score, game_date: game_date};

    /*
    var bookTitle = $('#bookTitle').val();
    var author = $('#author').val();
    var publisher = $('#publisher').val();
    var yearPublished = $('#yearPublished').val();
    var isbn = $('#isbn').val();
    var jsonString = {bookTitle: bookTitle, author: author, publisher: publisher, yearPublished: yearPublished, isbn: isbn};
    */
    
    var gameURL = 'http://localhost:3000';

    $.ajax({
        url: gameURL + "/public/gameArea.html",
        type: "post",
        data: jsonString,
        success: function(response){
            var data = JSON.parse(response);
            if (data.msg == "SUCCESS"){
                alert("Yay!")
            }
            else{
                console.log(data.msg);
            }
            alert(response);
        },
        error: function(err){
            alert(err);
        }
    });

    return false;
});