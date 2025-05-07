const  savedRecipeModel=require('../models/savedRecipeModel')

exports.saveRecipeContoller=async(req,res)=>{
    const {id}=req.params
    const userID=req.userID

    const {recipeName,recipeImage}=req.body

    try {

        const existingSavedRecipe=await savedRecipeModel.findOne({recipeID:id,userID:userID})

        if(existingSavedRecipe){
            res.status(409).json("This recipe is already saved in your list")
        }else{
            const newSavedRecipe=new savedRecipeModel({
                recipeID:id,
                recipeImage,
                recipeName
            })
            await newSavedRecipe.save()
            res.status(201).json(newSavedRecipe)
        }
        
    } catch (error) {
        res.status(500).json(error)
    }


}