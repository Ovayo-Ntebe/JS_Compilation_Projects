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
const data = ["ov"];
//--Set up middleware- tells server to expect json objects from client
app.use(express.json()); //where contet type is josn from test.rest


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
        <a href="/dashboard">Dashboard</a>
    </body>`)

});

app.get('/dashboard', (req, res) => {
    console.log('ohh now hit the /dashboard endpoint');
    res.send(`
        <body>
            <h1>dashboard</h1>
            <a href = "/">home</a>
        </body>   
        `
    );
})


/*---Type 2 - API endpoints (non visual) just use /api just for visual to differenciate*/
app.get('/api/data', (req, res) => {
    console.log('this api is for data');
    res.send(data);
    //if you want can also do res.status(599).send(data) - this will send the status code as well show the data, 599 is just eg
})

app.post('/api/data', (req,res) => {
    /*Someone wants to craete a user(eg when they click a sign up button)
    the user clicks the sign up button after entering therir credentials 
    and their browser is wired up to send out a nectwork request to the server to handle that action*/

    const newEntry = req.body ;//most req has body
    console.log(newEntry); //need to include middleware otherwise will show undefined- helps expect json data
    data.push(newEntry.name)
    res.sendStatus(201);
})


app.delete('/api/data', (req, res)=>{
    data.pop();
    console.log('We deleted the element off the end of the array');
    res.sendStatus(204); //successful delete
})

//server listen 
app.listen(PORT, () => console.log(`Server has started listening on port ${PORT} `))