const Task = require('../models').Task

/*
dentro de la carpeta model index se encarga de leer todos los archivos de la carpeta
y generar el modelo corespondiente para cada uno y luego exporta un objeto de cada uno
*/

module.exports = {
    /*
    home: function(req,res){
//el archivo que sera renderizado son solo que se encuentran en la carpeta views
        Task.findAll().then(function(tasks){
            res.render('tasks/index',{tareas:tasks}) //el nombre tareas es el selector dentro de la vista
        })
    },*/
    
   //funcion para crear nuevos elementoss
    create: function(req,res){
        Task.create({
            descripcion: req.body.descripcion,
        }).then(result=>{res.json(result)
        }).catch(error=>{
            console.log(error)
            res.json(error)
        })
    },

    new: function(req,res){
        //renderizara la vista. new sera new.pug
        res.render('tasks/new')
    },

    index: function(req,res){
        Task.findAll().then((tasks)=>{//findAll para consultar todos los registros y devuelve una promesa
            res.render('tasks/index',{tareas:tasks})
        })
    },

    show: function(req,res){
        Task.findByPk(req.params.id)
        .then((task)=>{
            res.render('tasks/show',{task})
            console.log(task)
        })
    },

    update: function(req,res){
        Task.update({descripcion: req.body.descripcion},{
            where: {id: req.params.id}
        }).then(res.redirect('/tasks/'+req.params.id))
    },

    edit: function(req,res){
        Task.findAll({where: {id: req.params.id}}).then((task)=>{
            res.render('tasks/edit',{task})
        })
    },

    destroy: function(req,res){
        Task.destroy({where: {id: req.params.id}}).then(contador=>{
            res.redirect('/tasks')
        })
    }

}