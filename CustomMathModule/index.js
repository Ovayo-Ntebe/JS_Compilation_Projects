//import a the maths Module using requires
/*const mathOperations = require("../CustomMathModule/mathOperations");

console.log(mathOperations); //print entire module
console.log(mathOperations.add(2,3)); */

//now instead of calling the mathOperations many times to access my functions. I can instead use object desctructing to get what i want only
const {add, subtract, PI} = require("../CustomMathModule/mathOperations");
const {currentDate, currentYear} = require("../CustomMathModule/logger")

//console.log( currentDate(), currentYear()); //call functions from logger module

// USING PATH MODULE - used for path and directories - check docs: https://nodejs.org/docs/latest-v24.x/api/path.html

//firstly I can access the directory and filename using __dirname and __filename
console.log(__dirname);
console.log(__filename);
//Now can use the Path module to find more about the paths 
const path = require('node:path');
const pathDeets = path.parse(__filename);
console.log(pathDeets);

//path.join = append a folder to a path 
//eg use case - you are trying to add a folder in your db to store uploaded images
const profilePath = path.join(__dirname, "uploads");
console.log(profilePath);

//USING OS MODULE 
const os = require("os");

//output differnt msgs based on users os 
if(os.platform() === "win32")
{
    console.log("Windows os detected");
}
else if(os.platform() === "darwin")
{
    console.log("Mac os detected");
}
else
{
    console.log("Other os detected");
}

//other nice functions of os 
console.log(os.totalmem());
console.log(os.freemem());


//FS - file stream module 
const fs = require("fs");

//will output all files found in my current directory( or provided path)
 const data = fs.readFileSync("./"); //can aslo use the async versin readFile 

 //help with error handeling if the path has files of exists
 fs.readdir("./", (err,data) => { // use a call back function (with arrow) to hanlde the output
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(data);
    }
 });
 //clean up this- "Error: EISDIR: illegal operation on a directory, read"