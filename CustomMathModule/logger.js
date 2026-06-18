//module to export currentDate and currentYear

function currentDate()
{
     return new Date().toTimeString();
}

function currentYear()
{
    return new Date().toTimeString();
}

module.exports = 
{
    currentDate, currentYear
}
