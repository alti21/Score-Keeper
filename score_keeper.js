var p1Button = document.querySelector("#p1");//player 1 button
var p2Button = document.getElementById("p2");//player 2 button
var resetButton = document.querySelector("#reset");//reset button
var p1Display = document.querySelector("#p1Display");//player 1's score display
var p2Display = document.getElementById("p2Display");//player 2's score display
var numInput = document.querySelector("input[type='number']");//input text box for changing max score
var winningScoreDisplay = document.querySelector("p span");//max score display
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function()
{
    if(!(gameOver))
    {
        p1Score++;
        if(p1Score === winningScore)
        {
            p1Display.classList.add("winner");//add green color to p1 score display
            gameOver = true;
            alert("GAME OVER! Player 1 wins!");
        }
        p1Display.innerHTML = p1Score;
    }
        
});

p2Button.addEventListener("click", function()
{
    if(!(gameOver))
    {
        p2Score++;
        if(p2Score === winningScore)
        {
            p2Display.classList.add("winner");
            gameOver = true;
            alert("GAME OVER! Player 2 wins!");
        }
        p2Display.innerHTML = p2Score;
    }    
});

resetButton.addEventListener("click",function()
{
   reset();
});

function reset() {
    p1Score = 0;
    p1Display.innerHTML = p1Score;
    p2Score = 0;
    p2Display.innerHTML = p2Score;
    gameOver = false;
    //remove green color from winning score display
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

numInput.addEventListener("change",function()
{
    //change value displayed for winning score
    winningScoreDisplay.innerHTML = this.value;
    //change actual winning score so a player will win at the new score
    winningScore = Number(this.value);//this refers to numInput
    reset();
});