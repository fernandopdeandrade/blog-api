const express = require('express');

const loginRoutes = require('./routes/login.routes');
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/category.routes');
const postRoutes = require('./routes/post.routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoutes);

app.use('/user', userRoutes);

app.use('/categories', categoryRoutes);

app.use('/post', postRoutes);

module.exports = app;