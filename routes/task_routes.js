const express = require('express')
let router = express.Router()
//se debe importar el controlador.
let TasksController = require('../controlers/tasks.js')

/*
las funciones manejadoras tambien se llaman ent points.
acciones definidas en el controlador.
el orden de las rutas es importante ya que el interprete busca una por una.
*/
router.route('/tasks')
.get(TasksController.index)
.post(TasksController.create)

router.get('/tasks/new',TasksController.new)

router.get('/tasks/:id/edit',TasksController.edit)

router.route('/tasks/:id') //wildcards
.get(TasksController.show)
.put(TasksController.update)
.delete(TasksController.destroy)

module.exports = router