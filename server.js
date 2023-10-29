const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/src', express.static('src'), express.static('node_modules'));


app.listen(port);
console.log('Server started at http://localhost:' + port);

// for live reloading see: https://medium.com/@jogarcia/express-live-reload-everything-5ccf7ceedc4e