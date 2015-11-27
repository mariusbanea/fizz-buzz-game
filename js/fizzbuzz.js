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

    var limit = prompt("Set the upper limit.");

    //validate the input
    if (/^\+?(0|[1-9]\d*)$/.test(limit)) {
        fizzbuzz(limit);
    } else {
        var limit = prompt("Set the upper limit.");
    }

});