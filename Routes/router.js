const express=require('express')
const router=new express.Router()
const userController=require('../Controllers/userController')
const transactionController=require('../Controllers/transactionController')
const jwtMiddleware  = require('../Middlewares/jwtMiddlewares')



//register api
router.post('/register',userController.register)

//login api
router.post('/login',userController.login)
//add transaction api
router.post('/add',jwtMiddleware,transactionController.add)

//add transaction api
router.get('/getUserTransactions',jwtMiddleware,transactionController.getUserTransactions)

//delete transaction api
router.delete('/deleteTransaction/:tid',jwtMiddleware,transactionController.deleteTransaction)

module.exports=router