//all app server code here- use express as its easier.. then the http require module

//import the module express
const express = require('express');

//call express as function to run a app
const app = express();

//define port num
const PORT = 3000;

//server listen 
app.listen(PORT, () => console.log(`Server has started listening on port ${PORT} `))