const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connect = require('./database/connection');
const router = require('./router/route');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port = 8000;

// HTTP GET Request
app.get('/', (req, res) => {
  res.status(201).json('Home GET Request');
});

// API Routes
app.use('/api', router);

// Start server only when we have valid connect ion
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log('Server connected to http://localhost:${port}');
      });
    } catch (error) {
      console.log('Cannot connect to server');
    }
  })
  .catch((error) => {
    console.log('Invalid database connection...!');
  });
