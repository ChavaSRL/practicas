const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app =express();
app.use(bodyParser.urlencoded({extended: true}));

//const sequelize = new Sequelize('prueba3',null,null,{
  //  dialect: 'sqlite',
    //storage: './prueba3'
//});

app.use('view engine','pug');


//let db= new sqlite3.Database('prueba3');//conexion con la base de datos

//db.run('CREATE TABLE task2(id int AUTO_INCREMENT, nombre varchar(100))');

app.post('/pendientes',function(req,res){
//db.run(`INSERT INTO task2(nombre) VALUES(?)`,req.body.nombre);
res.send('Insercion correcta');
});

app.listen(3000);

//process.on('SINGINT',function(){
//console.log('Se cerrara el servidor');
//db.close();
//process.exit();
//})
