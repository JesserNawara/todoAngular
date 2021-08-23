const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getTodos =function(){
    return prisma.todo.findMany()
} 
const createTodo = function(data){
    return prisma.todo.create({
        data:{
            text: data
        }
    })
}
const deleteTodo = function(id){
    var i = parseInt(id)
    return prisma.todo.delete({
        where: {id: i}
    })
}
const updateTodo = function(id,text){
    var i = parseInt(id)
    return prisma.todo.update({
        where:{id: i},
        data:{
            text: text
        }
    })
}

module.exports = {getTodos, createTodo, deleteTodo, updateTodo}