//now with belowthis line - we can access they key and variable taht we have written in env file.
require('dotenv').config()
const app=require("./src/app");

//app.listen work when server is started and is in ready state to handle request
//npm i dotenv - we have install to use this api.

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})