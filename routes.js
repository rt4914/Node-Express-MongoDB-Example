module.exports = (app) =>{
    
    const todoController = 
    require('./controllers/todo')

    app.get('/get_all_todos',
    todoController.getAllTodos)

    app.post('/add_todo', 
    todoController.addTodo)

    app.post('/update_todo',
    todoController.updateTodo)

    app.post('/delete_todo',
    todoController.deleteTodo)

}