//HTTP module allows us to crate a http server and also used for handeling different http requests 
//will allow interacting backend and frontend
const http = require("http");

// creates server for the backend
//goal, server will recieve request from user and it has to respond to it
//port 3000

/*const server = http.createServer((req, res)=> {
    res.write("Hello now responded"); // server responds after request 
    res.end();
}) ; */

//v2 server direct on differnt pages
const server = http.createServer((req, res)=> {
    if(req.url === "/")
    {
        res.write("Hello now responded to any route(page_) within dir"); // server responds after request 
    }
    if(req.url === "/about")
    {
         res.write("Hello now responded to only about route"); // server responds to about page
    }
    else
    {
        res.write("route not found response"); // server responds to about page
    }
    
    
    res.end();//always add at end
}) ; 

//need to make sure the server is listening to req on some port 
server.listen(3000, () => {
    console.log("server start listening on port 3000")
})

//To test this app. go to browser and type "localhost:3000", this will mimic  a request then you will see the response there
//use ctrl + c to stop currrent running code in terminal

/*NOTE in real projetcs  its not possible to be using if statements for all the different routes I can take. It can look messy and unmanageable
So a fix is instead of using the Http module use Express
WHY EXPRESS
1. It has more benefits than http module 
2. Allows routes to be divided amongst mant files
3. No confusion when wanting to update or change something in routes */