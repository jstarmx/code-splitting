const express = require('express');
const path = require('path');

const app = express();

app.set('port', 5000);
app.set('view engine', 'ejs');
app.set('views', path.resolve(`${__dirname}/src/views`));
app.use(express.static('public'));

app.get('/', (req, res) => res.render('pages/index'));
app.get('/search', (req, res) => res.render('pages/search'));

app.listen(app.get('port'), () =>
  // eslint-disable-next-line no-console
  console.log('Node app is running on port', app.get('port')));
