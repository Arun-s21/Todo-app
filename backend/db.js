const mongoose = require("mongoose")
const { boolean } = require("zod")
mongoose.connect("your url here")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const Todo = mongoose.model("Todos",todoSchema); 




module.exports={
    Todo:Todo
}