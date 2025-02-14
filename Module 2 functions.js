function RPS()
{
    // A variable that generates a random number between 1 and 3
    var player1 = Math.ceil(Math.random()*3);
    // Links the javascript to the HTML file and 
    document.getElementById("player1").innerHTML = player1;
    var player2 = Math.ceil(Math.random()*3);
    document.getElementById("player2").innerHTML = player2;
// Linking numbers to rock/paper/scissors for player 1
    if(player1 == 1)
    {
        document.getElementById("player1").innerHTML = "Rock!"; 
    }
    else if (player1 == 2)
    {
        document.getElementById("player1").innerHTML = "Paper!";
    }
    else
    {
        document.getElementById("player1").innerHTML = "Scissors!";
    }
// Linking numbers to rock/paper/scissors for player 2
    if(player2 == 1)
    {
        document.getElementById("player2").innerHTML = "Rock!"; 
    }
    else if (player2 == 2)
    {
        document.getElementById("player2").innerHTML = "Paper!";
    }
    else
    {
        document.getElementById("player2").innerHTML = "Scissors!";
    }
// Determining if theres a tie, and if not, who wins
    if (player1 == player2)
    {
        if (player1 == 1)
            {
                document.getElementById("results").innerHTML = "Tie! You both had Rock!"; // Shows a tie for rock
            }
        else if(player1 == 2)
            {
                document.getElementById("results").innerHTML = "Tie! You both had Paper!"; // Shows a tie for paper
            }
        else
            {
                document.getElementById("results").innerHTML = "Tie! You both had Scissors!"; // Shows a tie for scissors
            }

    }
    else if( (player1 == 1 && player2 == 3)  || (player1 == 2 && player2 == 1)  || (player1 == 3 && player2 ==2)) // Determines if player 1 or player 2 wins
    {
        document.getElementById("results").innerHTML = "Player 1 wins!"; // Shows player 1 winning
    }
    else
    {
        document.getElementById("results").innerHTML = "Player 2 wins!"; // Shows player 2 winning
    }
    
}