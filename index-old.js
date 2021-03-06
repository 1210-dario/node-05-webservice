const http = require('http')

const port = 3000;
//createServer recibe una función Callback con 2 parametros, request y response. Requeste se refiere a las peticiones que le haremos al servidor y Response la respuesta del servidor.
http.createServer((req, res)=>{

    console.log(req);

    res.writeHead(200,{'Content-Type': 'application/json'});
    const user = {
        id: 123,
        name: 'Dario'
    }
    res.write(JSON.stringify(user));
    
/*
    res.setHeader('Content-Disposition','attachment; filename=usuarios.csv');

    res.writeHead(200,{'Content-Type': 'application/csv'});
    
    res.write('id,name\n123,Dario\n456,Marta');
*/
    res.end();
    //Aca le añadimos el puerto al final donde va a estar esperando la respuesta
}).listen(port, () => {
    console.log(`Server started - Port ${port}`)
});

//El navegador solo nos hace peticiones GET necesitamos Postman para las otras peticiones