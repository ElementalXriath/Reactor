const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;
const server = express();

server.use(bodyParser.json());

server.use(cors());



app.get('/user/profile', (req, res) => {
  res.send()
})
server.listen(port, () => {
  console.log('Running on PORT:3000');
})
