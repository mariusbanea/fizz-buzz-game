/* this app has the following parts
- PART 1 => prompt for a number
- PART 2 => validate input
- PART 3 => if the input is valid play the game
- PART 3.1 => count from 1 to the set limit
- PART 3.2 => for each number check it and output the result
*/

/****************************
First declare the functions
****************************/

//PART 3.2 => check the each number and show the results
function check(currentNumber) {

    //set the default value for the msg variable
    var msg = "<li>" + currentNumber + "</li>";

    if (currentNumber % 3 == 0) {
        msg = "<li>Fizz</li>";
    }
    if (currentNumber % 5 == 0) {
        msg = "<li>Buzz</li>";
    }
    if (currentNumber % 15 == 0) {
        msg = "<li>FizzBuzz</li>";
    }
    //output the msg
    return msg;
}

//PART 3.1 => fizzbuz function is counting
function fizzbuzz(limit) {

    //loop through all the numbers and call the check counter function
    for (var counter = 1; counter <= limit; counter++) {
        $('#showResults').append(check(counter));
    }
}

/****************************
Then use the functions
****************************/

$(document).ready(function () {

    //PART 1 => get the upper limit from the user input
    var limit = prompt("Please set the upper limit to play FizzBuzz.");


    /****************************
    PART 2 => Starting the validation
    ****************************/

    //by default we are assuming that the input is valid (setting a FLAG to true)
    var userInputCorrectFlag = true;

    //at least 3 characters
    while (limit.length < 2) {
        var limit = prompt("Please enter 2 digits.");
        userInputCorrectFlag = false;
    }
    //no spaces
    while (limit.indexOf(' ') >= 0) {
        var limit = prompt("Please don't enter spaces - try a number!");
        userInputCorrectFlag = false;
    }
    //the limit is a number (if the rounded value of your number is the same with the initial number it means that the number was integer in the first place)
    while (Math.floor(limit) != limit) {
        var limit = prompt("Your upper limit was not correct. Set it again.");
        //change the user input flag to false
        userInputCorrectFlag = false;
    }

    //PART 3 => if the limit is a number, then play the game
    if (userInputCorrectFlag = true) {
        fizzbuzz(limit);
    }

});
