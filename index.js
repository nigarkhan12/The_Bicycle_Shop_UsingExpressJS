const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    return res.send('Hello NIgar')
})

app.listen(3000, () => console.log('Server is running at Port 3000'));