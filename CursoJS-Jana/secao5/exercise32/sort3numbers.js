/*
Write a JavaScript conditional statement to sort three numbers. Display the result on the page. 

Sample numbers : 0, -2, 3  Output : 3, 0, -2 
*/

var val1 = 0;
var val2 = -2;
var val3 = 3;

if (val1 > val2 && val1 > val3) {
    if(val2 > val3) {
        document.write(`${val1}, ${val2}, ${val3}`);
    }
    else {
        document.write(`${val1}, ${val3}, ${val2}`);
    }
} 
else if (val2 > val1 && val2 > val3) {
    if(val1 > val3) {
        document.write(`${val2}, ${val1}, ${val3}`);
    }
    else {
        document.write(`${val2}, ${val3}, ${val1}`);
    }
}
else if (val3 > val1 && val3 > val2) {
    if(val1 > val2) {
        document.write(`${val3}, ${val1}, ${val2}`);
    }
    else {
        document.write(`${val3}, ${val2}, ${val1}`);
    }
}
