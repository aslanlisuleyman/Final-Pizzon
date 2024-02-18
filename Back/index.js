const express=require("express")
const nodemailer=require("nodemailer")
require("dotenv").config()
const mongoose=require("mongoose")
const cors=require("cors")
const PizzaRouter=require("./routes/Pizza.routes")
const AllRouter=require("./routes/All.routes")
const EmployeeModel = require('./models/Employee')
const OrderRouter=require("./routes/Order.routes")


const app=express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://Suleyman:suleyman123@suleyman.vyltqxp.mongodb.net/test").then(()=>{
    console.log("running Mongo DB")
})

app.use("/pizza",PizzaRouter)
app.use("/all",AllRouter)
app.use("/order",OrderRouter)

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

function sendEmail({email,subject,message,subjec,messag}){
    return new Promise((resolve,reject)=>{
        var transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"pizzon.site@gmail.com",
                pass:"   amqi gjrj ympi zvmn  "
            }
            // oiyo ququ dzzs ysum
        });

        const mail_configs = {
            from: "pizzon.site@gmail.com",
            to: email,
            subject: subject,
            html: `<p>Name:${messag} <br/> Phone:${subjec} <br/> Message:${message}    </p>`,
            
        };

       

    transporter.sendMail(mail_configs, function (error,info){
        if(error){
            console.log(error)
            return reject ({message:`An error occured`})
        }
        return resolve({message:'Email sent successfully'}); 
    })
    });
}


function sendEmaill({email,subject,message,subjec,messag,date,guest}){
    return new Promise((resolve,reject)=>{
        var transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"pizzon.site@gmail.com",
                pass:"   amqi gjrj ympi zvmn  "
            }
            // oiyo ququ dzzs ysum
        });


        const mail_configss = {
            from: "pizzon.site@gmail.com",
            to: email,
            subject: subject,
            html: `<p>Name:${messag} <br/> Phone:${subjec} <br/> Message:${message}   <br/>Date:${date} <br/>Guest:${guest} </p>`,
            
        };

    transporter.sendMail(mail_configss, function (error,info){
        if(error){
            console.log(error)
            return reject ({message:`An error occured`})
        }
        return resolve({message:'Email sent successfully'}); 
    })
    });
}



app.get("/",( req, res) => {
    sendEmail(req.query)
    .then((response)=>response.send(response.message))
    .catch((error)=>res.status(500).send(error.message))
})


app.get("//",( req, res) => {
    sendEmaill(req.query)
    .then((response)=>response.send(response.message))
    .catch((error)=>res.status(500).send(error.message))
})


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




app.listen(3000,()=>{
    console.log("running Mongo Db")
})

