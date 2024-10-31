const express = require('express');
const router = express.Router();
const posts = require('../data-categories/posts');
const middleware = require('./middleware');



// Store tasks in an array
const tasks = [];
// middleware to parse JSON requests
router.use(express.json()); 
// middleware to parse URL-encoded requests
router.use(express.urlencoded({ extended: true })); 

// Function to find a task by its ID
function findById(id) {
    console.log('Finding task by ID:', id);
    return tasks.find((task) => task.id === parseInt(id));
}

// query parameter
router.get('/posts', (req, res) => {
    const author = req.query.author;
    const filteredPosts = posts.filter(post => post.author === parseInt(author));
    res.json(filteredPosts);
  });

  // route parameter
  router.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(post => post.id === parseInt(postId));
    res.json(post);
  });

// GET route to render the index page
router.get('/', (req, res) => {
    console.log('Tasks array:', tasks);
    res.render('index', {
      pageTitle: 'Welcome to Your To-Do List',
      welcomeMessage: 'Add a New Task To Your To-Do List:',
      tasks: tasks
    });
  }).all('*', (req, res) => {
    res.render('index', {
      pageTitle: 'Welcome to Your To-Do List',
      welcomeMessage: 'Add a New Task To Your To-Do List:',
      tasks: tasks
    });
  });

// POST route to add a new task
router.post('/tasks', middleware.logRequestMiddleware, middleware.validateTaskMiddleware, (req, res) => {
    const newTask = {
      id: tasks.length + 1,
      task: req.body.task,
      completed: false
    };
  
    tasks.push(newTask);
    res.render('index', {
      pageTitle: 'Welcome to Your To-Do List',
      welcomeMessage: 'Add a New Task To Your To-Do List:',
      tasks: tasks
    });
  });

// PATCH or PUT route to update a task
router.patch('/tasks/:id', (req, res) => {
    console.log('Updating task with ID:', req.params.id);
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

// GET route to log the tasks array
router.get('/tasks/log', (req, res) => {
    console.log('Tasks array:', tasks);
    res.send('Logged tasks array to console');
  });

// DELETE route to delete a task
router.delete('/tasks/:id', (req, res) => {
    console.log('Deleting task with ID:', req.params.id);
    const { id} = req.params;

    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ error: `Task with ID ${id}not found`});
    }

    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task deleted successfully'});
});




module.exports = router;

