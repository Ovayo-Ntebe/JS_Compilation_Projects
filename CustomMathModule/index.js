//import a the maths Module using requires
/*const mathOperations = require("../CustomMathModule/mathOperations");

console.log(mathOperations); //print entire module
console.log(mathOperations.add(2,3)); */

//now instead of calling the mathOperations many times to access my functions. I can instead use object desctructing to get what i want only
const {add, subtract, PI} = require("../CustomMathModule/mathOperations");
const {currentDate, currentYear} = require("../CustomMathModule/logger")

console.log( currentDate(), currentYear()); //call functions from logger module