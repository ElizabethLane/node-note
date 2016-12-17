console.log('Starting App');

const fs = require('fs');
//This says fetch all requires of 'fs' variable and store
//in fs constant
//**NOTE** const: block-scoped, immutable variables, results
//in optimal performation as constant will be replaced 
//at compile-time

fs.appendFile('greetings.txt', 'Hello World', function(err) {
    if (err) {
        console.log('Unable to write file');
    }
});

//We added the error callback function as node throws
//error without it