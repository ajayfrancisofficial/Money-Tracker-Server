const users=require('../models/userModel')
const jwt=require('jsonwebtoken')

//register
exports.register=async(req,res)=>{
    console.log("inside register API");
    const {name,email,password}=req.body
    console.log(name,email,password);
    
    try{
        const existingUser=await users.findOne({email})
        console.log(existingUser);
        if(existingUser){
            res.status(406).json("Account Already exists, Please Log In!!!")
        }
        else{
            const newUser=new users({
                name,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        

    }catch(err){
        res.status(401).json(err)
    }
}
//login
exports.login=async(req,res)=>{
    console.log("inside login API");
    const {email,password}=req.body
    console.log(email,password);
    try{
        const existingUser=await users.findOne({email,password})
        console.log(existingUser);
        if(existingUser){
            const token=jwt.sign({userId:existingUser._id},process.env.JWT_SECRET_KEY)
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(404).json("invalid email or password!!!")
        }

    }
    catch(err){
        res.status(401).json(err)
    }

}