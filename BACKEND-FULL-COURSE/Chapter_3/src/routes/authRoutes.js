//authentication code 
import express from 'express';
//import bycrypt from 'bycryptjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

//ENDPOINTS
//use router insead of app - allows us to subdivide the routes..instead of being all in server.js so use router now 
//the router will have the http methods like post etc
const router = express.Router();

//Register a new user endpoint /auth/register
router.post('/register', (req, res) => {
    //get the info from the body of the request. 
    const body = req.body; //can use object desctructing as well const{username, password} = req.body
    const username = body.username;
    const password = body.password;
    //save the username and an irreversable encrpyted password
    //save mash@gmail.com and 8883..hfhh(the encrpted version of password 123456)

    //encrypt the password 
    const hashedPassword = bcrypt.hashSync(password, 8);
    console.log(username, password);
    console.log(hashedPassword);
    res.sendStatus(201); //created status
});

router.post('/login', (req, res)=> {});
//we get theier email and we look up the password associated with that email in the database.
//but we get it back and see its encrypted , which means that we cannot compare it to the one the user just used trying to login



export default router;