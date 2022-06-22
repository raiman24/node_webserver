
const http = require('http');


http.createServer( ( req, res ) => {

    res.setHeader('Content-Disposition', 'attachment; filename=nombre.csv');
    //res.writeHead('200', { 'Content-type': 'application/json'});
    res.writeHead(200, { 'Content-type': 'application/csv'});
/*
    const persona = {
        id: 1,
        nombre: 'Rafa'
    }
*/
    // res.write(JSON.stringify(persona));
    res.write( 'id, nombre' );
    res.write( '1, Rafa' );
    res.write( '2, Estefi' );
    res.write( '3, Perico' );

    res.end();

}).listen( 9091 );
