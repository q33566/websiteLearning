//export and import
//export a function or variable from any file.
//import modules into a file in two ways, 
//based on if they are named exports or default exports.
//Named export (many variables or functions) 
import { name, age } from './person.js';
//Default export (one variabl or function)
import message from './message.js';
console.log(name,age);
console.log(message);