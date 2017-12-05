var p1ScoreBoard = document.getElementById("p1-score"),
    p2ScoreBoard = document.getElementById("p2-score"),
    p1ScoreBtn = document.getElementById("p1-score-button"),
    p2ScoreBtn = document.getElementById("p2-score-button"),
    resetScoreBtn = document.getElementById("reset-button");
    p1Score = 0;
    P2Score = 0;

    p1ScoreBtn.addEventListener("click", function(){
        p1Score++;
        console.log(p1Score);
        p1ScoreBoard.innerHTML = p1Score;
    });
