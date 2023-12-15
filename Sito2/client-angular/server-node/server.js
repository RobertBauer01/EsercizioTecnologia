const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/mb', (req, res) => {
    var jsonData = {
        "description": "This is an awesome mountain bike with a durable frame and high-performance features.",
        "image": {
            "src": "bike1.jpg",
            "alt": "Bike 1"
        }
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData, null, 2)); // The third argument adds indentation for better readability
});

app.get('/rb', (req, res) => {
    var jsonData = {
        "description": "Experience speed and comfort with this sleek road bike designed for long rides.",
        "image": {
            "src": "bike2.jpg",
            "alt": "Bike 2"
        }
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData, null, 2)); // The third argument adds indentation for better readability
});

app.get('/cb', (req, res) => {
    var jsonData = {
        "description": "This stylish city bike is perfect for commuting with its ergonomic design and trendy look.",
        "image": {
            "src": "bike3.jpg",
            "alt": "Bike 3"
        }
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData, null, 2)); // The third argument adds indentation for better readability
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.component.html'));
});

const port = process.env.PORT || '4200';
app.set('port', port);

app.listen(port, () => {console.log('Example app listening on port 4200!');});