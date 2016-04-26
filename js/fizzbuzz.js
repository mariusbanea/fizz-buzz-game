/*BEGINNER - using if and else statements*/
for (var counter = 1; counter <= 100; counter++) {
    //add the most restrictive conditional first (less numbers are divisible by 3 AND 5)
    if ((counter % 3 == 0) && (counter % 5 == 0)) {
        var msg = "FizzBuzz";
    }
    //and a little less restrictive conditional after (more numbers are divisible by 5)
    else if (counter % 5 == 0) {
        var msg = "Buzz";
    }
    //add the least restrictive conditional last (even more numbers are divisible by 3)
    else if (counter % 3 == 0) {
        var msg = "Fizz";
    }
    //set the default value last
    else {
        var msg = counter;
    }
    console.log(msg);
}

/*ADVANCED - using if statements only*/
for (var counter = 1; counter <= 100; counter++) {
    //set the default value first
    var msg = counter;
    //over-write the default values as we go throught the logic
    if (counter % 3 == 0) {
        msg = "Fizz";
    }
    if (counter % 5 == 0) {
        msg = "Buzz";
    }
    if ((counter % 3 == 0) && (counter % 5 == 0)) {
        msg = "FizzBuzz";
    }
    console.log(msg);
}

/*SUPER ADVANCED - the shortest fizzbuzz possible*/
for (var i = 1; i <= 100; i++) {
    var msg = "";
    if (i % 3 == 0) msg += "Fizz";
    if (i % 5 == 0) msg += "Buzz";
    console.log(msg || i);
}
