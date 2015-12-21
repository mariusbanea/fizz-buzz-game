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


    var userInputCorrect = true;
    //check if the limit is a number
    while (Math.floor(limit) != limit) {
        var limit = prompt("Your upper limit was not correct. Set it again.");
        userInputCorrect = false;
    }
    //if the user inoput is a number then play the game
    if (userInputCorrect = true) {
        fizzbuzz(limit);
    }

});
