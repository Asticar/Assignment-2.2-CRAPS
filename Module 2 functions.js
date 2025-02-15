function CRAPS()
{
    // A variable that generates a random number between 1 and 6
    var die1 = Math.ceil(Math.random()*6);
    // Links the javascript to the HTML file
    document.getElementById("die1").innerHTML = die1;
    var die2 = Math.ceil(Math.random()*6);
    document.getElementById("die2").innerHTML = die2;
    var sum = die1 + die2;
    document.getElementById("sum").innerHTML = sum;
    if(sum == 7 || sum == 11) // Determines if the sum of die 1 and die 2 would result in craps
    {
        document.getElementById("results").innerHTML = "CRAPS! You lose!"; 
    }
    else if (sum && die1 % 2 == 0) // Determines a win
    {
        document.getElementById("results").innerHTML = "You won!";
    }
    else // Determines a push
    {
        document.getElementById("results").innerHTML = "You pushed!";
    }
}