const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send('Hola Mundo')
});

app.get('/usuarios',function(req,res){
    res.send('Usuario: Dario')
});

app.post('/',function(req,res){
    res.send('Post del path /')
});