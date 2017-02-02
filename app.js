console.log('Starting App.js');

const fs = require('fs');
//This says fetch all requires of 'fs' variable (string is
//keyword in node bundled modules) and store
//in fs constant
//**NOTE** const: block-scoped, immutable variables, results
//in optimal performation as constant will be replaced
//at compile-time

const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
//Will look at core modules first to find lodash
//Will see it is not there, look at node_modules next

// './' --> points to current directory
var filteredArray = _.uniq(['and', 1, 'and', 2])
console.log(filteredArray);


// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`,
//     function(err) {
//     //The dollar sign curly braces is 'template strings' in ES6
//     //The tick is in front of the 1 on the keyboard
//     //Inside the curly braces simply insert a variable
//     if (err) {
//         console.log('Unable to write file');
//     }
// });

//We added the error callback function as node throws
//error without it

//fs.appendfile -if first arg file doesn't exist
//it will be created
