const router = require("express").Router();
const todoController = require("./../controllers/controllers.js")


router.get("/todo", todoController.getTodos);
router.post("/todo", todoController.createTodo);
router.put("/todo/:id", todoController.updateTodo);
router.delete("/todo/:id", todoController.deleteTodo);

module.exports = router;
