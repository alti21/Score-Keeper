var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");
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
            p1Display.classList.add("winner");
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
    p1Score = 0;
    p1Display.innerHTML = p1Score;
    p2Score = 0;
    p2Display.innerHTML = p2Score;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
});