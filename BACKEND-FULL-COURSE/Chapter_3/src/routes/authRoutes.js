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
    console.log(username, password);
    res.sendStatus(201); //created status
});

router.post('/login', (req, res)=> {});



export default router;