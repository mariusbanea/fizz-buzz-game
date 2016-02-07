$(document).ready(function () {

    /****************************
    First declare the functions
    ****************************/

    //fizzbuz function is creating the game
    function fizzbuzz(limit) {

        //check the each number and show the results
        function check(n) {
            var msg = "<li>" + n + "</li>";

            if (n % 3 == 0) {
                msg = "<li>Fizz</li>";
            };
            if (n % 5 == 0) {
                msg = "<li>Buzz</li>";
            };
            if (n % 15 == 0) {
                msg = "<li>FizzBuzz</li>";
            };
            return msg;
        }

        //loop through all the numbers and call the check counter function
        for (var counter = 1; counter <= limit; counter++) {
            $('#showResults').append(check(counter));
        }
    }

    /****************************
    Then use the functions
    ****************************/

    //get the upper limit from the user input
    var limit = prompt("Please set the upper limit to play FizzBuzz.");

    //by default we are assuming that the input is valid (setting a FLAG to true)
    var userInputCorrectFlag = true;
    //make sure that there are at least 3 characters
    while (userInput.length < 3) {
        var userInput = prompt("Please enter 3 digits.");
        userInputCorrect = false;
    }
    //make sure that there are no spaces
    while (userInput.indexOf(' ') >= 0) {
        var userInput = prompt("Please don't enter spaces - try a number!");
        userInputCorrect = false;
    }
    //check if the limit is a number (if the rounded value of your number is the same with the initial number it means that the number was integer in the first place)
    while (Math.floor(limit) != limit) {
        var limit = prompt("Your upper limit was not correct. Set it again.");
        //change the user input flag to false
        userInputCorrectFlag = false;
    }
    //if the user input is a number , then play the game
    if (userInputCorrectFlag = true) {
        fizzbuzz(limit);
    }

});
