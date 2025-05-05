const users=require('../models/userModel')
const bcrypt=require('bcrypt')

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