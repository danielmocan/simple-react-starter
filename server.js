const express = require( 'express' );
const fs = require( 'fs' );
const app = express( );
const path = require('path');
const PORT = 1111;

app.use( express.static(__dirname + "/"));
// app.get('*', function(request, response ){
//     response.sendFile(path.resolve(__dirname, '/index.html'));
// } );

app.use((req, res)=>{
	let rootHtml = fs.readFileSync(path.resolve(__dirname + "index.html"), { encoding: 'utf8'});
	return res.status(200).send(rootHtml);
});

app.listen( PORT, function( ) {
    console.log("Running on port ", PORT );
} );
