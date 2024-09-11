const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/jwt_db")
mongoose.connection.on("connected",()=>
{
    console.log("the dtabse is connecteed");
})


mongoose.connection.on("error",(err)=>
{
    console.log(`the database is not connetced error: ${err}`)
})
module.exports=mongoose;