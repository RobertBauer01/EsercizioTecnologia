const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
app.use(express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/bike1', (req, res) => {
  res.sendFile(__dirname + '/views/bike1.html');
});

app.get('/bike2', (req, res) => {
  res.sendFile(__dirname + '/views/bike2.html');
});

app.get('/bike3', (req, res) => {
  res.sendFile(__dirname + '/views/bike3.html');
});


const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {console.log('Example app listening on port 3000!');});

