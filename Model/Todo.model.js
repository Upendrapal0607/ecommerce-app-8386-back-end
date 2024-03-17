const mongoose= require("mongoose");

const todoSchema=mongoose.Schema({
    status:Boolean,
    task:String
},{versionKey:false})
const TodoModel= mongoose.model("todoData",todoSchema)

module.exports={
    TodoModel
}
