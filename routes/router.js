const express=require('express')
const recipeController=require('../controllers/recipeController')
const testimonyController=require('../controllers/testimoniController')
const userController=require('../controllers/userController')
const Router=new express.Router()

Router.get('/getallrecipes',recipeController.getAllRecipes)
Router.post('/addtestimony',testimonyController.addTestimonyController)
Router.post('/register',userController.RegistrationController)

module.exports=Router;