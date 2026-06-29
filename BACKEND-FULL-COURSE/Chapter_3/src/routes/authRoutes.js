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

    //but I need to make sure i catch any errors while inserting a user right
    try{
        //need to save user details to db
        //prepare method is like the exec method but we run a sql query and inject values into the query
        const insertUser = db.prepare(`INSERT INTO users (username, password) VALUES (?,?)`);
        const result = insertUser.run(username, hashedPassword);

        //now that we have a user , I want to add their first todo for them
        const defaultTodo = `Hello :) Add your first todo!`;
        const insertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES (?, ?)`);
        insertTodo.run(result.lastInsertRowid, defaultTodo); 

        /*Create a token - once logged in user , they are in a poition to CRUD todos, but they can 
        they can only modify theier own todos not anyones elses. to do this we need a special token with that network request
        that confirms that they are an authenticated user */

        //sets the token that will expire t=in 24h and they have to reauthenticate again
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: '24h'});
        res.json({token});
    }
    catch(err){
        console.log(err);
        res.sendStatus(503);
    }

    console.log(username, password);
    console.log(hashedPassword);
   // res.sendStatus(201); //created status
});

router.post('/login', (req, res)=> {
//we get theier email and we look up the password associated with that email in the database.
//but we get it back and see its encrypted , which means that we cannot compare it to the one the user just used trying to login
//so what we can do is again, one way encrypt the password the user just entered

const {username, password} = req.body;
try
{
    const getUser = db.prepare(`SELECT * FROM users WHERE username = ?`);
    const user = getUser.get(username);

    console.log(user.username, "is logged in")

    //if user not found , return out of this function and return the status 404 and a message telling the issue
  if (!user) {
    return res.status(404).send({ 
        message: "User not found" 
    });  //unknown error - syntax error 
    }  

    //check if entered password is equal to the encrypted password in the db
    const passwordValid = bcrypt.compareSync(password, user.password);
    if(!passwordValid) { return res.status(401).send({message:"Invalid password"});}

    console.log(user);
    
    //if reached this point then we have a successful authentication, then give token so they can do CRUD
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    res.json({token});
} 
catch(err) 
{
    console.log(err.message);
    res.sendStatus(503);
}


});

export default router;