const http = require('http')

const port = 3000;

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

}).listen(port, () => {
    console.log(`Server started - Port ${port}`)
});

