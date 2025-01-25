const express = require('express');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('db.json');  // Specify your db.json file

app.use('/api', router);  // Route the requests to json-server

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
