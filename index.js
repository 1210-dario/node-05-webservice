require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.send('Hola Mundo')
});

app.get('/usuarios',function(req,res){
    res.send('Usuario: Dario')
});

app.post('/',function(req,res){
    res.send('Post del path /')
});

app.listen(port, () => {
    console.log(`Server started - Port ${port}`);
});
