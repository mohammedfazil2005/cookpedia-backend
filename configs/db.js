const mongoose=require('mongoose')

const CONNECTIONSTRING=process.env.CONNECTIONSTRING

mongoose.connect(CONNECTIONSTRING).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})