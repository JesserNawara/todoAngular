const todoModel = require('../models/model.js')

module.exports = {
    async getTodos(req, res) {
      try {
        const todos = await todoModel.getTodos()
        res.send(todos)
      }
      catch(error) {
        res.send("7aja")
      }
    },
    async createTodo(req, res) {
        try {
            const todo = await todoModel.createTodo(req.body.todo)
            res.send(todo)
        }
        catch(error) {
            res.send("error")
        }
    },
    async updateTodo(req, res) {
        try {
            const todo = await todoModel.updateTodo(req.params.id, req.body.text)
            res.send(todo)
        }
        catch {
            res.send("error")
        }
    },
    async deleteTodo(req, res) {
        try {
            const todo = await todoModel.deleteTodo(req.params.id)
            res.send(todo)
        }
        catch(error) {
            res.send(error)
        }
    }
}