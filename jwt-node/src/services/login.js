const bcrypt=require("bcrypt");
const User=require("../models/user")
const {generateToken}=require("../utils/jwUtils");

async function login(email,password)
{
    try{
       const existinguser= await User.findOne({email})
       if( !existinguser)
       {
        console.log("user not found");
       }
      const ispasswordvalid= bcrypt.compare(password,existinguser.password);
      if(!ispasswordvalid)
      {
        throw new Error("Incorrect password");
      }
     const token= generateToken(existinguser)
     return token;
    }catch(error){
        console.log("login error:",error.message)
        throw new Error("INvalid credential");
    }
}


module.exports={
    login
}