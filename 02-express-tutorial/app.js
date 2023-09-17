const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'))

app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
})



app.all('*',(req, res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(8000,()=>{
    console.log('server is listening on port 8000...');
});

//app.get
//app.post
//app.put
//app/delete

