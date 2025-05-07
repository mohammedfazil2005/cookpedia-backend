const mongoose=require('mongoose')

const  downloadSchema=new mongoose.Schema({
    recipeID:{type:String,required:true},
    recipeName:{type:String,required:true},
    recipeImage:{type:String,required:true},
    recipeCuisine:{type:String,required:true},
    count:{type:Number,required:true}
})

const downlaodRecipe=mongoose.model('downloadrecipes',downloadSchema)

module.exports=downlaodRecipe