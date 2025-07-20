const express=require("express");
const aiRoutes= require("./routes/ai.routes");
const app=express(); //creating our server now
const cors=require('cors');
app.use(express.json());

//axios server don't share its resources with anyone 
//not even with frontend by default so to sare resources with frontend we have to intall package- npm i cors
app.use(cors())
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.use("/ai",aiRoutes);
module.exports=app;