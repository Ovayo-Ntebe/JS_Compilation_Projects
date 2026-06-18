const PI = 3.14;

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

//Create module and choose which functions and varibles you want exported 
module.exports = {
    add,
    subtract,
    PI

}

console.log(module);
console.log(add(1,2))
