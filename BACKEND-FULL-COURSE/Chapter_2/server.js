//all app server code here- use express as its easier.. then the http require module

//import the module express
const express = require('express');

//call express as function to run a app
const app = express();

//define port num
const PORT = 3000; 
//the address of the server connected to the network is:
// URL-> http://localhost:3000
//IP -> 127.0.0.3000
/*HTTP verbs and routes - need tp configure app for these verbs and routes
the method informs the nature of the request and the route is a further subdirectory(basically we direct the request to the body of code to repond approriatly
and these locations or routes are called endpoints) */

app.get('/', (req, res) => { 
    //this is endpoint 1 - /
    console.log('yay I hit an endpoint', req.method); //just printing the type of method which is get on consolse
    res.sendStatus(200); // this returns OK on client side browser

});

app.get('/dashboard', (req, res) => {
    console.log('ohh now hit the /dashboard endpoint');
    res.send('hi');
})
//server listen 
app.listen(PORT, () => console.log(`Server has started listening on port ${PORT} `))