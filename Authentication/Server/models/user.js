const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const joi=require('joi');
const passwordComplexity =require('joi-password-complexity');
const Joi = require('joi');
const userSchema=new mongoose.Schema({
    firstname: {type : String , required:true},
    lastname: {type : String , required:true},
    email: {type : String , required:true},
    password: {type : String , required:true},
    verified:{type:Boolean,default:false}
});
userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},"mynameisshwetangirajeshbhaisatasiya");
   return token;
}
const User=mongoose.model("user",userSchema);
const validate=(data)=>{
    const schema=Joi.object({
        firstname:Joi.string().label("First Name"),
        lirstname:Joi.string().label("Last Name"),
        email:Joi.string().email().required().label("Email"),
        password:passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
}

module.exports={User,validate};
// const dat=new mongoose.model("dat",userSchema);

// const createDoc= async()=>{
//     try {
//         const reactP=  new dat({
//             firstname:"Shwetangi",
//             lastname:"Satasiyaaa",
//             email:"swet@gmail.com",
//             password:"swet12345"
//         })
//         const res=await reactP.save();
//         console.log(res); 
//     } catch (error) {
//         console.log(error);
//     }

// } 
// createDoc();