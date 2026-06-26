import express from 'express';
import db from '../db.js';

const router = express.Router();

//get all todos for logged in user 
router.get('/', (req, res) => {})

//create a new todo
router.post('/', (req, res) => {});

//Update a todo
//use dynamic query parameter :id . cz when updating i need the id i want to update so this id will be passed 
router.put('/:id', (req, res) => {});

//Delete a todo
router.delete('/:id', (req, res) => {});

export default router;