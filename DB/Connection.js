const mongoose=require('mongoose')

const connectionString=process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB atlas connected successfully with mtServer");


}).catch((reason)=>{
    console.log(reason);
    console.log("MongoDB connection Failed");
})