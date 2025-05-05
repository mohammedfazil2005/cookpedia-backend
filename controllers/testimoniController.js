const testimonials=require('../models/testimonyModel')

exports.addTestimonyController=async(req,res)=>{
    const {name,email,message}=req.body
    try {
        const newTestimony=new testimonials({
            name,email,message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)
    } catch (error) {
        res.status(500).json(error)
    }
}