const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  const now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  res.render('Maintenance.hbs', {
    pageTitle: 'maintenance',
    msg: 'maintenanece'
  });
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMsg: "Hi chong!"
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page'
  });
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Wrong url!'
  })
})

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
