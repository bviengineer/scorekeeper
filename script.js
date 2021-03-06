var p1ScoreBoard = document.getElementById("p1-score"),
    p2ScoreBoard = document.getElementById("p2-score"),
    p1ScoreBtn = document.getElementById("p1-score-button"),
    p2ScoreBtn = document.getElementById("p2-score-button"),
    resetScoreBtn = document.getElementById("reset-button"),
    maxScoreDisplay = document.getElementById("max-score"),
    userInput = document.getElementById("user-input"),
    p1Score = 0,
    p2Score = 0,
    winningScore;

    //event listener for user input
    userInput.addEventListener("change", function(){
        winningScore = parseInt(userInput.value);
        maxScoreDisplay.textContent = userInput.value;
        p1Score = 0;
        p2Score = 0;
        p1ScoreBoard.textContent = "0";
        p2ScoreBoard.textContent = "0";
        p1ScoreBoard.classList.remove("winningColor");
        p2ScoreBoard.classList.remove("winningColor");        
    });
    
    //resets gameboard at the click of the reset button 
    resetScoreBtn.addEventListener("click", function(){
        resetGame();
    });
    
    //player 1 button
    p1ScoreBtn.addEventListener("click", function(){
        p1Score++;
        if (p1Score === winningScore){                      
            winner();
        } p1ScoreBoard.textContent = p1Score;
    });

    //player 2 button
    p2ScoreBtn.addEventListener("click", function(){
        p2Score++;
        if(p2Score === winningScore){    
            winner();
        } p2ScoreBoard.textContent = p2Score;
    });


    //disables player buttons after a player wins the game & changes the color of the winning score, to green    
    function winner(){
        p1ScoreBtn.disabled = true;
        p2ScoreBtn.disabled = true;
        if(p1Score === winningScore){
            p1ScoreBoard.classList.add("winningColor");
        } else if(p2Score === winningScore){
            p2ScoreBoard.classList.add("winningColor");
        }
    }

    //will reset the game if user changes the max score or changes the max score in the middle of the game
    function resetGame(){
        p1Score = 0;
        p2Score = 0;
        p1ScoreBoard.textContent = "0";
        p2ScoreBoard.textContent = "0";
        userInput.value = "";
        maxScoreDisplay.textContent = "";
        p1ScoreBoard.classList.remove("winningColor");
        p2ScoreBoard.classList.remove("winningColor");        
        p1ScoreBtn.disabled = false;
        p2ScoreBtn.disabled = false;
    }