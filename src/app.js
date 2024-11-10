const express = require('express');

const app = express();
 
// Request Handlers
app.get("/", (req, res) => {
    res.send('Hello from the Dashboard!');
});

app.get("/hello", (req, res) => {
    res.send('Hello from the server page Hello!');
});

app.get("/test", (req, res) => {
    res.send('Hello from the server page test!');
});

app.listen(7777, () => {
    console.log('Server is running on port 7777');
});
