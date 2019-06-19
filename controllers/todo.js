const todoModel = require('../models/todo')


const getAllTodos = (req, res)=>{

    todoModel.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.send(error)
    })

}

const addTodo = (req, res)=>{
    
    const params = req.body
    const time = new Date()/1000;

    const newTodo = new todoModel({
        
        title : params.title,
        status : params.status,
        timestamp: time

    })

    newTodo.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.send(error)
    })

}

const updateTodo = (req, res)=>{
    res.send({"response_message":"SUCCESS"})
}

const deleteTodo = (req, res)=>{
    
    const params = req.body
    
    todoModel.findOneAndDelete({_id: params._id})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
    

}



module.exports = {
    getAllTodos,
    addTodo,
    updateTodo,
    deleteTodo
}