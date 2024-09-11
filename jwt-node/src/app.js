const express=require("express")
const signupRoute=require("./routes/signup")
const bodyParser=require("body-parser");
const cors=require("cors")
const loginRoute=require("./routes/login")
const createAdminAccount=require("./scripts/admin");
const app =express()

const PORT=process.env.PORT||5000

 app.use(bodyParser.json());
 app.use(cors());
 createAdminAccount()
 
 app.use("/user",signupRoute);
 app.use("/auth",loginRoute)
app.listen(PORT,function(req,res)
{
    console.log(`the server is running on loacalhost ${PORT}`)
})