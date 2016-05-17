/* this app has the following parts
- PART 1 => prompt for a number
- PART 2 => validate input
- PART 3 => if the input is valid play the game
- PART 3.1 => count from 1 to the set limit
- PART 3.2 => for each number check it and output the result
*/


/* How the elements are working together in this app?

var limit (line 89 gets the input from the user)
... and then ...
---> function "validate" (called at line 92 and defined at line 26: checks the input from the user and if it is valid is going to play the game)
... and then ...
-------> function "fizzbuz" (called at line line 50 and defined at line 55: start counting from the 1 the "limit")
... and then ...
-----------> function "check" (called at line line 59 and defined at line 64: which is checking if the counter is fizz, buzz of fizzbuzz)
*/

/****************************
First declare the functions
****************************/

//PART 2 => continuing the validation
function validate(inputNumber) {

    //by default we are assuming that the input is valid (setting a FLAG to true)
    var userInputCorrectFlag = true;

    //at least 1 characters
    while (inputNumber.length < 1) {
        var inputNumber = prompt("Please enter 1 digit or more.");
        userInputCorrectFlag = false;
    }
    //no spaces
    while (inputNumber.indexOf(' ') > 0) {
        var inputNumber = prompt("Please don't enter spaces. Try a number!");
        userInputCorrectFlag = false;
    }
    //the limit is a number (if the rounded value of your number (Math.floor(inputNumber)) is the same with the initial number (inputNumber), it means that the number (inputNumber) was integer in the first place)
    while (Math.floor(inputNumber) != inputNumber) {
        var inputNumber = prompt("Your upper limit was not a number. Set it again.");
        //change the user input flag to false
        userInputCorrectFlag = false;
    }

    //PART 3 => if the limit is valid, then play the game
    if (userInputCorrectFlag = true) {
        fizzbuzz(inputNumber);
    }
}

//PART 3.1 => fizzbuz function is counting
function fizzbuzz(limit) {

    //loop through all the numbers and call the check counter function
    for (var counter = 1; counter <= limit; counter++) {
        $('#showResults').append(check(counter));
    }
}

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

/****************************
Then use the functions
****************************/

$(document).ready(function () {

    //PART 1 => get the upper limit from the user input
    var limit = prompt("Please set the upper limit to play FizzBuzz.");

    //PART 2 => Starting the validation
    validate(limit);

});
