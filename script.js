var p1ScoreBoard = document.getElementById("p1-score"),
    p2ScoreBoard = document.getElementById("p2-score"),
    p1ScoreBtn = document.getElementById("p1-score-button"),
    p2ScoreBtn = document.getElementById("p2-score-button"),
    resetScoreBtn = document.getElementById("reset-button"),
    p1Score = 0,
    P2Score = 0,
    winningScore = 5;

    p1ScoreBtn.addEventListener("click", function(){
        if(p1Score < winningScore){
            p1Score++;
            p1ScoreBoard.textContent = p1Score;
            console.log(p1ScoreBoard);
        } else if(p1Score = winningScore){
            p1ScoreBoard.style.color = "red";
            p1ScoreBtn.style.display = "none";
            p2ScoreBtn.style.display = "none";
        }
    });
