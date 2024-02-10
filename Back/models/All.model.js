const mongoose=require("mongoose")

const All=mongoose.model("All",new mongoose.Schema({
    image:String,
    title:String,
    price:Number,
    desc:String
}))

module.exports=All