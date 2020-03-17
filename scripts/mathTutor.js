$(document).ready(function() {
    // setting variables
    var isAnswering = false;
    var numOfCorrect = 0;
    var answer = 0;

    // add click event
    $("#add").click(
        function() {

            if(isAnswering == false){
            // create new random variable
              var num1 = Math.random(); // 0.9999...
              // multiply it by the limit making it from 0 - 100
              num1 *= 100;
              // add one so its 1 - 100
              num1 += 1;
              // chop off any decimals
              num1 = Math.floor(num1);
              
              // create new random variable
              var num2 = Math.random(); // 0.9999...
              // multiply it by 100 making it from 0 - 100
              num2 *= 100;
              // add one so its 1 - 100
              num2 += 1;
              // chop off any decimals
              num2 = Math.floor(num2);
              // append the question
              $("#mathResult").append("<p id = question>What is " + num1 + " + " + num2 + "</p>");
              // change variable answer to be the sum of both numbers
              answer = (num1 + num2);
              // set isAnswering to true to prevent clicking buttons while answering
              isAnswering = true;
              
            } else {
                // this means the user cant hit the add or subtract button and must answer the question
                $("#errorMath").text("You are currently answering a question.");
            }
              
        });

        // subtract click event
        $("#subtract").click(
            function() {
                if(isAnswering == false){
                    // create new random variable
                  var num1 = Math.random(); // 0.9999...
                  // multiply it by 100 making it from 0 - 100
                  num1 *= 100;
                  // add one so its 1 - 100
                  num1 += 1;
                  // chop off any decimals
                  num1 = Math.floor(num1);
                  
                  // create new random variable
                  var num2 = Math.random(); // 0.9999...
                  // multiply it by 100 making it from 0 - 100
                  num2 *= 100;
                  // add one so its 1 - 100
                  num2 += 1;
                  // chop off any decimals
                  num2 = Math.floor(num2);
                  // append the question
                  $("#mathResult").append("<p id = question>What is " + num1 + " - " + num2 + "</p>");
                  // change answer variable to be the two numbers subtracted
                  answer = (num1 - num2);
                  // set isAnswering to true to prevent clicking buttons while answering
                  isAnswering = true;
                  
                } else {
                    // this means the user cant hit the add or subtract button and must answer the question
                    $("#errorMath").text("You are currently answering a question.");
                }         
            });

            
            // eventHandler for if the answerButton button is clicked
            $("#answerButton").click(
                function() {

                    
                    // if what the user put into the box is equal to the actual anser
                    if ( $("#answer").val() == answer )
                    {
                        // add 1 to the number of correct questions
                        numOfCorrect += 1;
                        // print results
                        $("#mathResult").text("Correct! you have answered " + numOfCorrect + " question(s) correctly!");
                        // change isAnswering to false so that the user can ask more quesitons
                        isAnswering = false;
                        // clear the answer box
                        $("#answer").val("");
                    } else {
                        // the user got the question wrong
                        $("#mathResult").text("Wrong!");
                        // change isAnswering to false so that the user can ask more quesitons
                        isAnswering = false;
                        // clear the answer box
                        $("#answer").val("");
                    }
                                 
                });

});
