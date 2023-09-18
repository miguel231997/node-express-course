const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

app.use('/api/people', people)
app.use('/login', auth)

//static assets
app.use(express.static('./methods-public'));

//parse from data
app.use(express.urlencoded({extended: false}));

//parse json
app.use(express.json());

app.listen(8000, ()=>{
    console.log('Server is running on Port 8000....');
})




