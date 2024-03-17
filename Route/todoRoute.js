
const express = require("express");

const { TodoModel } = require("../Model/Todo.model");

const todoRoute = express.Router();

todoRoute.get("/", async (req, res) => {
    try {
        const todo = await TodoModel.find()
        res.status(200).json({
          todo
        });
      } 
    
   catch (error) {
    res.status(404).send({ message: error });
  }
});

// AdminAuth
todoRoute.post("/add", async (req, res) => {
  const addedTodo = req.body;
  // console.log(addedProduct);
  try {
    const addedtodo = new TodoModel(addedTodo);
    await addedtodo.save();
    res.status(200).send({ message: "New todo added successfully" });
  } catch (error) {
    res.status(200).send(error);
  }
});

todoRoute.patch("/update/:todoId", async (req, res) => {
  try {
    const { todoId } = req.params;

    const Post = await TodoModel.findOne({ _id: todoId });
 if(Post){
    await TodoModel.findByIdAndUpdate({ _id: todoId }, req.body);
    res
      .status(200)
      .send({ message: `todo ${todoId} updated successfully` });
 }
 else{
    res.status(404).send({ message: "todo not fount", error});
 }
  }
   catch (error) {
    res.status(404).send({ message: "errror" });
  }
});
todoRoute.delete("/delete/:todoId",  async (req, res) => {
  try {
    const { todoId } = req.params;
    let todo = await TodoModel.findByIdAndDelete({ _id: todoId });
    if(todo){

    
    res
      .status(200)
      .send({ message: `todo ${todoId} deleted successfully` });
    }
    else{
        res.status(404).send({ message: "todo not fount", error});
    }
  }
   catch (error) {
    res.status(404).send({ message: "errror" });
  }
});

module.exports = {
  todoRoute
};
