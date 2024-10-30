const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
const PORT = 3000;


// Set different properties for the app
app.set('view engine', 'ejs');
app.set('views', './views')

// Routes
app.get('/', (req, res) => {
  res.render('index.ejs', {
    pageTitle: 'Welcome to Your To-Do List',
    welcomeMessage: 'Add a New Task To Your To-Do List:',
  });
})
  

  // body-parser middle ware
  app.use(bodyParser.urlencoded({ extended: true }));

  // come back to this later
  // app.use('/', routes);


  // Listening for requests
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
  });
