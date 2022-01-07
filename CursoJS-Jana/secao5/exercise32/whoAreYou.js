/*
Add a conditional statement that test to see if the isAdmin variable is true. If it is, then open an alert with the message "Welcome administrator".

Add an else if clause that tests to see if the isStudent variable is true. If it is, then open an alert dialog with the message 'Welcome student'.

Add a final else clause to this conditional statement. So that, if the isAdmin and isStudent variables are both false, an alert opens with the message "Who are you?"

var isAdmin = true;

var isStudent = false;
*/

var isAdmin = true;
var isStudent = false;

if(isAdmin) {
    alert("Welcome administrator");
}
else if(isStudent) {
    alert("Welcome student");
}
else {
    alert("Who are you?");
}