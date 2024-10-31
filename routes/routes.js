const express = require('express');
const router = express.Router();
const posts = require('../data-categories/posts');

// Store tasks in an array
const tasks = [];

// GET route to render the index page
router.get('/', (req, res) => {
    res.render('index', { tasks: tasks }); // Pass the tasks aray
});

// POST route to add a new task
router.post('/tasks', (req, res) => {
    console.log('Request body:', req.body);
    const { task } = req.body;
  
    if (!task) {
      return res.status(400).json({ error: 'Task is required' });
    }
  
    const newTask = {
      id: tasks.length + 1,
      task,
      completed: false
    };
  
    tasks.push(newTask);
    res.json({ message: 'Task added successfully', newTask });
  });

// PATCH or PUT route to update a task
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { title, content, completed} = req.body;

    const post = posts.find((post) => post.id === parseInt(id));
    if (!post) {
        return res.status(404).send('Post not found');
    }

    post.title = title;
    post.content = content;
    post.completed = completed;
    
    res.json({ message: 'Post updated successfully' });
})

// DELETE route to delete a task





module.exports = router;

