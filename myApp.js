require('dotenv').config();
let express = require('express');
let app = express();

function simpleLogger(req, res, next) {
  const { method, path, ip } = req;
  console.log(`${method} ${path} - ${ip}`);
  next();
}

app.use(simpleLogger);

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
