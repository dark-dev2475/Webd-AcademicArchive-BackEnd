const  User= require ("../models/user");
const bcrypt=require ("bcrypt");
async function createAdminAccount()
{
    try{
       const existingAdmin=await  User.findOne({email:"admin@test.com"});
       if(!existingAdmin){
        const newAdmin= new User({
            name:"Admin",
            email:"admin@test.com",
            
            password: await bcrypt.hash("admin",10),
            role:"admin"
            
         })
         await newAdmin.save();
         console.log("admin account createdc successfuly")
       }
       else{
        console.log("admin already exist");
       }
    }catch(error){
        console.log(error.message);

    }
}
module.exports=createAdminAccount;