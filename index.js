const express = require('express');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const { logRequestMiddleware } = require('./routes/middleware');
const PORT = 3000;

// body-parser middle ware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('assets'));


// Set ejs template engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('view cache', false);


app.use(logRequestMiddleware);

// Routes
app.use(routes);

  
const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
};

app.use(errorHandlerMiddleware);


// Listening for requests
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
  });
