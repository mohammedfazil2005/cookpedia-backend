const express=require('express')
const recipeController=require('../controllers/recipeController')
const testimonyController=require('../controllers/testimoniController')
const userController=require('../controllers/userController')
const downloadController=require('../controllers/downloadRecipeController')
const  savedRecipeController=require('../controllers/savedRecipeController')
const Router=new express.Router()
const jwtMiddlware=require('../middlwares/jwtMiddleware')

Router.get('/getallrecipes',recipeController.getAllRecipes)
Router.post('/addtestimony',testimonyController.addTestimonyController)
Router.post('/register',userController.RegistrationController)
Router.post('/login',userController.LoginController)
Router.get('/singlerecipe/:recipeID/view',jwtMiddlware,recipeController.getSingleRecipe)
Router.get('/related-recipes',jwtMiddlware,recipeController.getRelatedRecipe)

Router.post('/recipe/:id/download',downloadController.addToDownloadRecipe)
Router.post('/recipe/:id/save',jwtMiddlware,savedRecipeController.saveRecipeContoller)

module.exports=Router;