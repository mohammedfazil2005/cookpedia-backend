const recipes=require('../models/recipeModel')

exports.getAllRecipes=async(req,res)=>{
    try {
        const allRecipes=await recipes.find()
     
        res.status(200).json(allRecipes)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}