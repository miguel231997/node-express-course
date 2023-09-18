const express = require('express');

const app = express();

const logger = require('./logger.js');

app.use(logger);

//req => middleware => res

app.get('/', (req, res)=>{
    res.send('Home')
})


app.listen(8000, ()=>{
    console.log('Server is running on Port 8000....');
})




