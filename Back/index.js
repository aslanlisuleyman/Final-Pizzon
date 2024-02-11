const express=require("express")
require("dotenv").config()
const mongoose=require("mongoose")
const cors=require("cors")
const PizzaRouter=require("./routes/Pizza.routes")
const AllRouter=require("./routes/All.routes")
const UserRouter=require("./routes/User.routes")
const app=express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("running Mongo DB")
})

app.use("/pizza",PizzaRouter)
app.use("/all",AllRouter)
app.use("/users",UserRouter)

app.listen(3000,()=>{
    console.log("running Mongo Db")
})

