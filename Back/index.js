const express=require("express")
const nodemailer=require("nodemailer")
require("dotenv").config()
const mongoose=require("mongoose")
const cors=require("cors")
const PizzaRouter=require("./routes/Pizza.routes")
const AllRouter=require("./routes/All.routes")
const EmployeeModel = require('./models/Employee')

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminEmailFull = process.env.NEXT_PUBLIC_ADMIN_EMAIL_FULL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;


const app=express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://Suleyman:suleyman123@suleyman.vyltqxp.mongodb.net/test").then(()=>{
    console.log("running Mongo DB")
})

app.use("/pizza",PizzaRouter)
app.use("/all",AllRouter)


app.post('/Login' , (req,res)=>{
    const {email,password} = req.body
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    } )
})

app.post('/Register',(req,res)=>{
EmployeeModel.create(req.body)
.then(employees=>res.json(employees))
.catch(err=>res.json(err))
})

const transporter = nodemailer.createTransport({
    // service:"gmail",
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: process.env.NEXT_PUBLIC_EMAIL_PORT,
    secure:true,
    auth:{
        user:adminEmail,
        pass,

    }
    
    
  });

  const mailOptions = {
    from: adminEmailFull,
    to: adminEmailFull,
    
  }


app.listen(3000,()=>{
    console.log("running Mongo Db")
})

module.exports={mailOptions,transporter}

