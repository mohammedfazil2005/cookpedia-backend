const downlaodRecipe=require('../models/downloadModel')

exports.addToDownloadRecipe=async(req,res)=>{
    const {id}=req.params
    const {recipeName,recipeImage,recipeCuisine}=req.body
    try {

        const existingRecipe=await downlaodRecipe.findOne({recipeID:id})

        if(existingRecipe){
            existingRecipe.count+=1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)

        }else{
            const newRecipeDownload=new downlaodRecipe({
                recipeID:id,
                recipeImage,
                recipeCuisine,
                count:1
            })
            await newRecipeDownload.save()
            res.status(201).json(newRecipeDownload)
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}

