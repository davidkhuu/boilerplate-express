let express = require('express');
let app = express();

app.get('/', function (req, res) {
  const absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));


app.get('/json', function (req, res) {
  res.json({ "message": "Hello json" });
});



























 module.exports = app;
