const Joi = require('joi');
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();


mongoose.connect('mongodb://localhost/users')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/Users', users);
app.use('/api/Auth', auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
