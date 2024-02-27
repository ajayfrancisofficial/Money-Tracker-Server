const mongoose =require('mongoose')

const transactionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    dateAndTime:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    userId:{
        type:String,
        required:true
    }
})
const transactions=mongoose.model("transactions",transactionSchema)
module.exports=transactions