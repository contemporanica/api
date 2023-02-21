
const http = require('http');
const options = {
  hostname: 'www.example.com',
  port: 80,
  path: '/api',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': req.params.TOKEN
  }
};



