const express = require('express')
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const override = require('method-override') //libreria para actualizar o borrar desde el navegador


const app = express()


//const tasks = require('./controlers/tasks.js')
//se debe importar las rutas
const task_routes = require('./routes/task_routes')



app.use(bodyParser.urlencoded({extended:true}))
app.use(override('_method')) //para utilizar el nuevo verbo a ejecutar atravez de parametros query
//ejemplo: POST http://localhost:3000/tasks/2?_method=PUT
app.set('view engine', 'pug')


//y se debe usar las rutas luego de cargar el bodyParser
app.use(task_routes)


app.get('/', function(req,res){
  res.redirect('/tasks',)
})
/*
es conveniente realizar la conexion a la base de daos solo una vez e importar los modelos desde sus archivos
se puede comentar ya que ya se genera la conexion en index de models */
/*
const sequelize = new  Sequelize('proyecto-backend',null,null,{
  dialect:'sqlite',
  storage:'./proyecto-backend'  

})
*/

//el manejo de las rutas estan en la carpeta routes y seran manejadas desde alli
//app.get('/tasks', tasks.home)


app.listen(3000)