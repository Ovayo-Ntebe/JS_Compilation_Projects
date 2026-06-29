import express from 'express';
import db from '../db.js';

const router = express.Router();

//get all todos for logged in user 
router.get('/', (req, res) => {
    const getTodos = db.prepare('SELECT * FROM  todos WHERE user_id = ?');
    const todos = getTodos.all(req.userId);
    res.json(todos);

})

//create a new todo
router.post('/', (req, res) => {
    const{task} = req.body;
    const insertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES (?,?)`);
    const result = insertTodo.run(req.userId, task);

    res.json({id: result.lastInsertRowid, task, completed: 0})

});

//Update a todo
//use dynamic query parameter :id . cz when updating i need the id i want to update so this id will be passed 
router.put('/:id', (req, res) => {
    const {completed} = req.body; //this is the json object that is taken from the emulator..
    const {id} = req.params; //get the id from the url parameter
    //const {page} = req.query // if i wanted to get the value after the ? in the url 
    //PUT http://localhost:5003/todos/2?page=4 will get the 4 ...but the page is not really needed in this project

    //now update the todo
    const updatedTodo = db.prepare(`UPDATE todos SET completed = ? WHERE id = ?`);
    //if wanted to update multiple values then say db.prepare(`UPDATE todos SET completed = ?`, task = ? WHERE id = ?);
    updatedTodo.run(completed, id);

    res.json({message: "Todo complete"})


});

//Delete a todo
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const userId = req.userId;
    const deleteTodo = db.prepare(`DELETE FROM todos WHERE id = ? AND user_id = ?`); //ensure delete right users todo
    deleteTodo.run(id, userId);

    res.send({message: "Todo deleted"});

});

export default router;