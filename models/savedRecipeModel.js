const mongoose=require('mongoose')

const  savedRecipeSchema=new mongoose.Schema({
    recipeID:{type:String,required:true},
    recipeName:{type:String,required:true},
    recipeImage:{type:String,required:true},
    userID:{type:String,required:true},
})

const savedRecipeModel=mongoose.model('savedRecipes',savedRecipeSchema)

module.exports=savedRecipeModel