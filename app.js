const cors = require('cors');
const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const { authentication } = require('./controllers/authController');

let corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/notes', authentication, noteRouter);

module.exports = app;
