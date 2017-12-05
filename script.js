var p1ScoreBoard = document.getElementById("p1-score"),
    p2ScoreBoard = document.getElementById("p2-score"),
    p1ScoreBtn = document.getElementById("p1-score-button"),
    p2ScoreBtn = document.getElementById("p2-score-button"),
    resetScoreBtn = document.getElementById("reset-button"),
    p1Score = 0,
    p2Score = 0,
    winningScore = 5;

    //player 1 button
    p1ScoreBtn.addEventListener("click", function(){
        if(p1Score < winningScore){
            p1Score++;
            p1ScoreBoard.textContent = p1Score;
        } else if(p1Score === winningScore){            
            winner();
        }
    });

    //player 2 button
    p2ScoreBtn.addEventListener("click", function(){
        if(p2Score < winningScore){
            p2Score++;
            p2ScoreBoard.textContent = p2Score;
        } else if(p2Score === winningScore){    
            winner();
        }
    });

    //resets gameboard 
    resetScoreBtn.addEventListener("click", function(){
        p1Score =0;
        p2Score = 0;
        p1ScoreBoard.textContent = "0";
        p2ScoreBoard.textContent = "0";
        p1ScoreBoard.classList.remove("winningColor");
        p2ScoreBoard.classList.remove("winningColor");        
        p1ScoreBtn.disabled = false;
        p2ScoreBtn.disabled = false;
    });

    //disables player buttons after a player wins the game & changes the color of the score to green    
    function winner(){
        p1ScoreBtn.disabled = true;
        p2ScoreBtn.disabled = true;
        if(p1Score === winningScore){
            p1ScoreBoard.classList.add("winningColor");
        } else if(p2Score === winningScore){
            p2ScoreBoard.classList.add("winningColor");
        }
    }