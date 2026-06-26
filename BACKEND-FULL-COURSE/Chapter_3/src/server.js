//import module in type: module in the packge.json to use the new format instead of const express = require('express)
import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const app = express();

const PORT = process.env.PORT || 5003; //choose port from env or use default

//Get the file path from the URL of the current module 
const __filename = fileURLToPath(import.meta.url);
//Get the directory name from the file path
const __dirname = dirname(__filename);

//Serves the HTML filr from the /public directory
//Tells express to serve all files from the public folder as static assests /file
//Any requests for the css files will be resolved to the public directory
app.use(express.static(path.join(__dirname, '../public'))); //basically moves from src folder to the public folder

//Serving up the HTML file from the /public directory
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); //send the index.html but just dynamically allcates the file path , i mean different pcs and stuff
})

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`);
})