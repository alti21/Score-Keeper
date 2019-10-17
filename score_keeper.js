var p1Button = document.querySelector("#p1");
var p2Buttton = document.getElementById("p2");
var p1Score = 0;

p1Button.addEventListener("click", function()
{
    p1Score++;
    document.querySelector("#p1Display").innerHTML = p1Score;    
});