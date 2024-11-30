const mongoose = require("mongoose")
const { boolean } = require("zod")
mongoose.connect("mongodb+srv://arunsng18:JOPDWq0vOygJBvPb@cluster0.kxgs0.mongodb.net/todo-application")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const Todo = mongoose.model("Todos",todoSchema); 




module.exports={
    Todo:Todo
}