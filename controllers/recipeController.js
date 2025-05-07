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

exports.getSingleRecipe=async(req,res)=>{
    const {recipeID}=req.params
    try {
        const recipeDetails=await recipes.findById({_id:recipeID})
        res.status(200).json(recipeDetails)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getRelatedRecipe=async(req,res)=>{
    const cuisine=req.query.cuisine

    try {

        const Filteredrecipes=await recipes.find({cuisine:cuisine})
        res.status(200).json(Filteredrecipes)
        
    } catch (error) {
        res.status(500).json(error)
    }


}