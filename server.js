// Load Express
const express = require('express');
const path = require('path');

// requier the ToDO DB
const todoDB = require('./data/todo-db');
const jediDB = require('./data/jedis');

// Create our express app
const app = express();

// Configure the a (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount Middleware (ap.use)

// Define a "root" route directly on ap
// Tomrrow, we'll use best practice routing
// Mount routes
app.get('/', function (req, res) {
    res.redirect('/home');
});

app.get('/home', function (req, res) {
    res.render('home');
});

app.get('/todos', function (req, res) {
    res.render('todos/index', {
        todos: todoDB.getAll()
    });
});

app.get('/jedis', function (req, res) {
    res.render('jedis/index', {
        jedis: jediDB.getAll()
    });
});

app.get('/jedis/:jedi', function (req, res) {
    console.log(`The value for the :jedi route paramter is: ${req.params.jedi}`);
    res.render('jedis/show', { jedi: jediDB.getOne(req.params.jedi) });
});

// Tell the app to listen on ort 3000
// for HTTP requests from client
app.listen(3000, function () {
    console.log('Listening on port 3000');
});