const express = require('express');
const router = express.Router();

// Store tasks in an array
let tasks = [];

// GET route to render the index page
router.get('/', (req, res) => {
    res.render('index', { tasks: tasks }); // Pass the tasks aray
});

// POST route to add a new task
router.post('/', (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    res.redirect('/');
});

module.exports = router;