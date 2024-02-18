const mongoose=require("mongoose")

const Order=mongoose.model("Order",new mongoose.Schema({
    image:String,
    title:String,
    price:Number,
    desc:String,
    brand:String
}))

module.exports=Order