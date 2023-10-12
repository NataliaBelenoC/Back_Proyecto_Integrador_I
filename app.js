const express = require('express');
const app = express();
var mysql = require('mysql')

var conexion = mysql.createConnection({
  host: 'localhost',
  database: 'clinicapediatra',
  user: 'root',
  password: ''
});

conexion.connect(function(error){
  if(error){
    throw error;
  }else{
    console.log('conexion exitosa')
  }
})

conexion.query('SELECT * from TRATAMIENTO;', function(error,results, fields){
  if (error)
    throw error;

    results.forEach(result => {
      console.log(result);      
    });
})
conexion.end

//hasta aqui es la conexión a la base de datos
app.use(express.static(__dirname + '/public/'));

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});

app.get('/:name',(req,res)=>{
    
    const nombre = req.params.name;
    console.log(nombre)
    res.sendFile("/index.html")
})