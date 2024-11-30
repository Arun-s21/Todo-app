const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const {updateTodo , createTodo} = require("./types")
const {Todo} = require("./db");
//body{
//title:
//description:
//}
app.use(cors({
     origin:"http://localhost:5173"
}));

app.get("/todos",async function(req,res){

    const getTodo = await Todo.find({})
    res.json({
            getTodo
        })
    

})


app.post("/todo",async function(req,res){

    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);
    if(!parsedPayload){
        return res.status(403).json({
            message:"Incorrect todo format"
        });
    }
    
    //everything fine then put the todo in mongodb  
    
    await Todo.create({
        title:payload.title,
        description:payload.description,
        completed:false
    });
     res.json({
        message:"Successfully added todo"
     })
    



})

app.put("/completed",async function(req,res){
    const updatedPayload = req.body;
    const parsedUpdatedPayload = updateTodo.safeParse(updatedPayload);
    if(!parsedUpdatedPayload.success){
        return res.status(403).json({
            message:"You didnt provide valid id for updation"
        });
    }
    try{
    await Todo.findOneAndUpdate({
        _id:req.body.id
    },{
        completed:true
    });
    console.log(req.body.id)
    
    res.json({
        message:"Todo completed successfully"
    })
    } catch(e){
        res.json({
            message:"some error occurred while updating"
        })
    }
    


})


app.listen(3000,function(req,res){
    console.log("Server running");
});

