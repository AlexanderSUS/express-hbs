const express = require("express");
const { engine } = require("express-handlebars")

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('.hbs', engine({ extname: '.hbs' }));

app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});


app.get('/home', (req, res) => {
  res.render('home');
});


app.get('/success', (req, res) => {
  res.render('success');
});


app.get('/register', (req, res) => {
  res.render('register');
});


app.post('/register', (req, res) => {
  console.log(req.body);
  res.redirect('success');
})

app.get('/login', (req, res) => {
  res.render('login');
});


app.post('/login', (req, res) => {
  res.redirect('user-page');
})


app.get('/user-page', (req, res) => {
  res.render('user-page');
})

app.listen(3000);