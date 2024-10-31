// middleware.js
const logRequestMiddleware = (req, res, next) => {
    console.log(`Request method: ${req.method} | Request URL: ${req.url}`);
    next();
  };
  
  const validateTaskMiddleware = (req, res, next) => {
    if (!req.body.task) {
      return res.status(400).json({ error: 'Task is required' });
    }
    next();
  };
  
  module.exports = { logRequestMiddleware, validateTaskMiddleware };