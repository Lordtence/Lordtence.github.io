/*
Theodore Langlie
Description: This file creates a gamble game to play against a AI oppenent
*/
$(document).ready(function() {

// create variable limit that is by default -1
var limit = -1;


    /* ----------------------- gamble game code----------------------- */
        // eventHandler for if the roll button is clicked
        $("#roll").click(
            function() {
                // if limit is 0 that means a player hasnt set a limit so just put error message
                if ( limit == -1 )
                {
                    $("#returned").append("<p id = gameMessage>You must set a LIMIT</p>");
                } else {
                // create new random variable
                var x = Math.random(); // 0.9999...
                // multiply it by the limit making it from 0 - limit
                x *= limit;
                // add one so its 1 - limit
                x += 1;
                // chop off any decimals
                x = Math.floor(x);
                // show player what they rolled
                $("#returned").append("<p id = gameMessage>You rolled a " + x + " </p>");
                // if that number was 1, they lost the game!
                if(x == 1){
                    gameOver(false);
                    // reset limit
                    limit = -1;
                }
                else {
                // set the new limit to what the player rolled
                limit = x;
                // -------- COMPUTER TURN ---------
                // same process of rolling for a number within limit
                var i = Math.random(); // 0.9999...
                i *= limit;
                i += 1;
                i = Math.floor(i);
                // show what computer rolled
                $("#returned").append("<p id = gameMessage>Computer rolled a " + i + " </p>");
                // if computer rolled a 1 they lose
                if(i == 1){
                    gameOver(true);
                    limit = -1;
                }
                // set the new limit to whichever rolled number was lowest
                if( i > x )
                {
                    limit = x;
                }
                else if( i < x )
                {
                    limit = i;
                } else {
                    limit = i;
                }
                }
            }
                
        });

        // set click event for player to set the limit of the gamble
        $("#set").click(
            function() {
                // if the limit is within parameters, set the limit
                if ( $("#limit").val() > 1  && $("#limit").val() <= 1000)
                {
                    limit = $("#limit").val();
                    $("#limit").remove();
                }                
        });
    });
    

    /**
     * This function handles the event that the game is over
     * @param {boolean} playerWin see if player won or not
     */
    function gameOver (playerWin)
    {
        // if player won, say player won! otherwise, they took the L
        if ( playerWin == true )
        {
            $("#Finale").append("<p> Player Won! </p>");
            $("#roll").remove();
            $("#set").remove();
        } else {
            $("#Finale").append("<p> Computer Won! </p>");
            $("#roll").remove();
            $("#set").remove();
        }
    }
        