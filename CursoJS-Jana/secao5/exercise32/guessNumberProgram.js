/*
Create a number from 1 to 6 and store it in a variable. Than ask visitor to guess the number. If user guesses display the message “Great, you guessed” otherwise “Bummer, the correct number was ” and display the correct number.

Update the program: if he/she doesn’t guess, give him or her another possibility to guess and give a hint: “number is smaller” or “number is bigger”. And when he or she answers again display the appropriate message, that is “Great, you guessed if the answer is correct. Or “Bummer, the correct number was ” and display the correct number.*/

var secretNumber = 2;
var answer;
answer = prompt("Guess the number between 1 and 6!");
var n = Number(answer);

if(n < secretNumber) {
    answer = prompt("The number is bigger! Guess again!");
}
else {
    answer = prompt("The number is smaller! Guess again!");
}
var n = Number(answer);

if(n === secretNumber) {
    document.write("<h1>Great, you guessed!</h1>")
}
else {
    document.write(`<h1>Bummer, the correct number was ${secretNumber}!</h1>`);
}
