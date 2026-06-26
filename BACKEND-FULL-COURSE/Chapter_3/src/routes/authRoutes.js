//authentication code 
import express from 'express';
import bycrypt from 'bycryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

//ENDPOINTS
//use router insead of app - allows us to subdivide the routes..instead of being all in server.js so use router now 
//the router will have the http methods like post etc
const router = expresss.Router();

router.post('/register', (req, res) => {});

router.post('/Login', (req, res)=> {});



export default router;