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
        } else if(p1Score = winningScore-1){
            p1ScoreBoard.style.color = "green";
            p1ScoreBtn.disabled = true;
            p2ScoreBtn.disabled = true;
        }
    });

    resetScoreBtn.addEventListener("click", function(){
        p1ScoreBoard.textContent = "0";
        p2ScoreBoard.textContent = "0";
        p1ScoreBoard.style.color = "black";
        p1ScoreBoard.style.color = "black";        
        p1ScoreBtn.disabled = false;
        p2ScoreBtn.disabled = false;
    });
