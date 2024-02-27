const transactions=require('../models/transactionModels')
const jwt=require('jsonwebtoken')

//add transaction
exports.add=async(req,res)=>{
        console.log("inside add api");
        const userId=req.payload
        console.log(userId);
        const {title,amount,type,dateAndTime,description}=req.body

        try{
            const newTransaction=new transactions({
                title,amount,type,dateAndTime,description,userId
            })
            await newTransaction.save()
            res.status(200).json(newTransaction)

        }catch(err){
            res.status(401).json(err)

        }

}

//getUSerTransactions
exports.getUserTransactions=async(req,res)=>{
    const userId=req.payload
    try{
        const userTransactions=await transactions.find({userId})
        res.status(200).json(userTransactions)
    }
    catch(err){
        res.status(401).json(err)
    }
}

//delete transaction
exports.deleteTransaction=async(req,res)=>{
    console.log("inside delete transaction api");
    const {tid}=req.params
    try{
        const deletedTransaction=await transactions.findByIdAndDelete({_id:tid})
        res.status(200).json(deletedTransaction)
    }catch(err){
        res.status(401).json(err)
    }
}