const express = require('express');
const app = express();

const bicycles = require('./data/data.json');

app.get('/', (req, res) => {
    return res.send(bicycles)
});


app.get('/bicycle', (req, res) => { 
    console.log(req.query.id);
    const bicycle = bicycles.find(b => b.id === req.query.id);

    return res.send(bicycle);
})

app.listen(3000, () => console.log('Server is running at Port 3000'));