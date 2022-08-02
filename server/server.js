const express = require('express');
const path = require('path');
const app = express();
require("dotenv").config();
const key = process.env.API_KEY;
const axios = require('axios');
const fetch = require('node-fetch');
const routes = require('./routes');

//parses req data
app.use(express.json());
app.use( express.static(path.join(__dirname, '../public/dist')));
app.use(routes);

app.get('/shows/:name', (req, res) => {
  console.log(req.params.name);
  // axios.get('http.api')
  //   .then(result => res.send(result.data))
  //   .catch(err => res.status(404));
})

app.get('/movies', (req, res) => {

})

app.post('/shows', (req, res) => {

})

app.post('/movies', (req, res) => {

})

app.listen(8080, console.log('Server listening on 8080'));