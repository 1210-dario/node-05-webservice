require('dotenv').config();
//Primero se requiere express
const express = require('express');
//Segundo se crea el entry point osea app donde se ejecutara express()
const app = express();
//Especifico el puerto donde trabajar 
const port = process.env.PORT || 3000;
//Aca manipulo los servicios, es decir decido que hacer con la peticion que recibo e incluso puedo tener distintos path como /usuarios , etc. express posee todos los metodos de peticiones http osea, get, post, delelte, put, patch , etc. 

//Con app.use puedo abrir elementos estaticos, como imagenes, html o css, en este caso va a ser lo primero en abrirse y no el path de .get /  
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.send('Hola Mundo')
});

app.get('/usuarios',function(req,res){
    res.send('Usuario: Dario')
});

app.post('/',function(req,res){
    res.send('Post del path /')
});

// Nos da un status de si inicio el Servidor 
app.listen(port, () => {
    console.log(`Server started - Port ${port}`);
});

//En el archivo .env dejamos las constantes de Enviroment o entorno de desarrollo las cuales son unicas del enterno en el que nos manejamos

