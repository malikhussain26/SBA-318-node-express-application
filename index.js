const express = require('express');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const uuid = require('uuid').v4;
const PORT = 3000;

  // body-parser middle ware
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

   // Routes
   app.use(routes);


// Set ejs template engine
app.set('view engine', 'ejs');
app.set('views', './views')

// Routes
app.get('/', (req, res) => {
  res.render('index.ejs', {
    pageTitle: 'Welcome to Your To-Do List',
    welcomeMessage: 'Add a New Task To Your To-Do List:',
  });
})
  
const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
};

app.use(errorHandlerMiddleware);


  // Listening for requests
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
  });
