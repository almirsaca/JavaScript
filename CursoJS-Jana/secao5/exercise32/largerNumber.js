/*
Write a JavaScript program that accept two integers from the user and display the larger. 
*/

var num1, num2;

var num1 = parseInt(prompt('Type a number'));
var num2 = parseInt(prompt('Type another number'));

// podemos usar var maior = Math.max(num1, num2);

if(num1 > num2) {
    document.write(`The larger number between ${num1} and ${num2} is ${num1}`);
}
else if(num2 > num1) {
    document.write(`The larger number between ${num1} and ${num2} is ${num2}`);
}
else if(isNaN(num1) || isNaN(num2)) {
    document.write(`Opssss! You should have entered a number!`);
}
else {
    document.write(`The number is equal ${num1} = ${num2}<p></p>`);
}
