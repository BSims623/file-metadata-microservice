var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose')
const multer = require('multer')
require('express-async-errors')
require('dotenv').config()

var app = express();

const upload = multer({ dest: './public/data/uploads/' })

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  const { originalname: name, mimetype: type, size } = req.file
  console.log(req.file, req.body)
  res.json({ name: name, type: type, size: size })
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
