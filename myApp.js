require('dotenv').config();
let express = require('express');
let app = express();

app.get('/', function (req, res) {
  const absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function (req, res) {
  let message = 'Hello json';
  if (process.env.MESSAGE_STYLE === 'uppercase') {
      message = message.toUpperCase();
  }
  res.json({ "message": message });
});






















 module.exports = app;
