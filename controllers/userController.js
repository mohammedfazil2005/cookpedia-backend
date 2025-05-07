const users=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.RegistrationController=async(req,res)=>{
    const {username,email,password}=req.body
    try {

        const existingUser= await users.findOne({email})

        if(existingUser){
            res.status(409).json("user already exists")
        }else{
            const encryptedPassword=await bcrypt.hash(password,10)
            const newUser=new users({
                username,
                email,
                password:encryptedPassword
            })
            await newUser.save()
            res.status(201).json(newUser)
        }
        
    } catch (error) {
        res.status(500).json({error})
    }
}

exports.LoginController=async(req,res)=>{
    const {email,password}=req.body;
    try {

        const existingUser=await users.findOne({email})
        if(existingUser){
            let isPasswordMatch=await bcrypt.compare(password,existingUser.password)

            if(isPasswordMatch||existingUser.password==password){
                const token=jwt.sign({userID:existingUser._id},process.env.SUPERSECRETKEY)
                res.status(200).json({user:existingUser,token})
            }else{
                res.status(404).json("Invalid Email/Password!")
            }


        }else{
            res.status(404).json("Invalid Email/Password!")
        }


        
    } catch (error) {
        res.status(500).json(error)
    }


}