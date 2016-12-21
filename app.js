console.log('Starting App');

const fs = require('fs');
//This says fetch all requires of 'fs' variable (string is  
//keyword in node bundled modules) and store
//in fs constant
//**NOTE** const: block-scoped, immutable variables, results
//in optimal performation as constant will be replaced 
//at compile-time

const os = require('os');

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err) {
    //The dollar sign curly braces is 'template strings' in ES6
    //The tick is in front of the 1 on the keyboard
    //Inside the curly braces simply insert a variable
    if (err) {
        console.log('Unable to write file');
    }
});

//We added the error callback function as node throws
//error without it

//fs.appendfile -if first arg file doesn't exist
//it will be created