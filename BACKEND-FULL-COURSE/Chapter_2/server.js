//all app server code here- use express as its easier.. then the http require module

//import the module express
const express = require('express');

//call express as function to run a app
const app = express();

//define port num
//the address of the server connected to the network is:
// URL-> http://localhost:3000
//IP -> 127.0.0.3000
/*HTTP verbs and routes - need tp configure app for these verbs and routes
the method informs the nature of the request and the route is a further subdirectory(basically we direct the request to the body of code to repond approriatly
and these locations or routes are called endpoints) */
const PORT = 3000; 

//dummy data for api
const data = {
    name: 'OV'
}
/*CRUD-method, create-post, read-get, update-put, delete-delete */

/*---Type 1 -Website endpoints( these endpoints are for sending back html and they typically come when a user enters a url in a browser) */

app.get('/', (req, res) => { 
    //this is endpoint 1 - /
   /* console.log('yay I hit an endpoint', req.method); //just printing the type of method which is get on consolse
    res.sendStatus(200); // this returns OK on client side browser */
    //i will now send html to the client
   // res.send('<h1>Homepage</h1>');
   //create a templete literal string to inject data
   res.send(`
    <body style = "background:pink; color:black">
        <h1>Body:</h1>
        <p>${JSON.stringify(data)}</p>
    </body>`)

});

app.get('/dashboard', (req, res) => {
    console.log('ohh now hit the /dashboard endpoint');
    res.send('<h1>dashboard</h1>');
})


/*---Type 2 - API endpoints (non visual) just use /api just for visual to differenciate*/
app.get('/api/data', (req, res) => {
    console.log('this api is for data');
    res.send(data);
})

//server listen 
app.listen(PORT, () => console.log(`Server has started listening on port ${PORT} `))