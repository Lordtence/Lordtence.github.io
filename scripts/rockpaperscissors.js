/*
Theodore Langlie
Description: This file creates a game of rock paper scissors against a computer opponent
*/

$(document).ready(function() {


/* ----------------------- START OF ROCK PAPER SCISSORS CODE ----------------------- */
    // eventHandler for if the rock button is clicked
    $("#rock").click(
		function() {
            // set the user choice to 1 (means rock)
            var userChoice = 1;
            // print what the user chose
            $("#result").text("You chose rock");
            // set the computer choice value to a random value between 1-3 by calling the computer() function
            var computerChoice = computer();
            // finally, call the compare function passing along the two 'choice' variables
            compare(computerChoice, userChoice);
            
    });
    // eventHandler for if the paper button is clicked
    $("#paper").click(
		function() {
            // set the user choice to 2 (means paper)
            var userChoice = 2;
            // print what the user chose
            $("#result").text("You chose paper");
            // set the computer choice value to a random value between 1-3 by calling the computer() function
            var computerChoice = computer();
            // finally, call the compare function passing along the two 'choice' variables
            compare(computerChoice, userChoice);
            
    });
    // eventHandler for if the scissors button is clicked
    $("#scissors").click(
		function() {
            // set the user choice to 3 (means scissors)
            var userChoice = 3;
            // print what the user chose
            $("#result").text("You chose scissors");
            // set the computer choice value to a random value between 1-3 by calling the computer() function
            var computerChoice = computer();
            // finally, call the compare function passing along the two 'choice' variables
            compare(computerChoice, userChoice);
            
	});
});
// first we should perscribe values to the different choices
// ROCK = 1, PAPER = 2, SCISSORS = 3

/**
 * This function generates a random number from 1-3, and then returns that value, as well as
 * printing that value to the website
 */
function computer ()
{
    var x = Math.random(); // 0.9999...
    // die: 1-6
    // Multiply x by 3: 0.0 - 2.9999....
    x *= 3;
    // Add 1 to x : 1.0 - 3.999999...
    x += 1;
    // chop off fractional part --> integers
    x = Math.floor(x);
    // with that series of statements, x is either 1 2 or 3. so either rock paper or scissors!
    
    // print out what the computer chose based off the random choice
        if (x == 1)
        {
            $("#AIresult").text("the computer chose rock");
        }
        else if (x == 2)
        {
            $("#AIresult").text("the computer chose paper");
        }
        else
        {
            $("#AIresult").text("the computer chose scissors");
        }
        return x; // return the value off the random number
}


// these global variables will keep track of how many times the user and player win
var userWins = 0;
var compWins = 0;
/**
 * 
 * @param ai value that holds the computers random choice
 * @param player value that holds the user choice
 */
function compare (ai, player)
{
    // first check if they are they same value, if so, it is a tie
    if(player == ai)
    {
        $("#Finalresult").text("It is a tie!");
    } 
    // then check if any of these scenerios are true, if one of them is, the computer wins
    else if (player == 1 && ai == 2 || player == 3 && ai == 1 || player == 2 && ai == 3)
    {
        $("#Finalresult").text("Computer Wins");
        compWins += 1;
        $("#score").text("Player score " + userWins + ". Computer score " + compWins);
    } 
    // and then, if it isnt a tie or a win for computer, the player must have won
    else{
        $("#Finalresult").text("Player Wins");
        userWins += 1;
        $("#score").text("Player score " + userWins + ". Computer score " + compWins);
    } 
}
/* ----------------------- END OF ROCK PAPER SCISSORS CODE ----------------------- */
    