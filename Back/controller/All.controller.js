const All=require("../models/All.model")

const AllController={
    getAll:async(req,res)=>{
        try{
            const products=await All.find()
            res.send(products)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
        const target=await All.findById(id)
        res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("error")
        }
        
    },
    delete:async(req,res)=>{
        try{
             const {id}=req.params
        await Product.findByIdAndDelete(id)
        const prod=await All.find({})
        res.status(200).send(prod)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    add:async(req,res)=>{
        try{
            const{image,title,price,desc}=req.body
            const newProduct= new All({image,title,price,desc})
            await newProduct.save()
            res.status(201).send(newProduct)
        }
        catch(error){
            res.status(404).send("error")
        }
        
    },
    edit:async(req,res)=>{
        try{
            const{id}=req.params
            const{image,title,price,desc}=req.body
            await All.findByIdAndUpdate(id,{image,title,price,desc})
            res.status(200).send("succes")
        }
        catch(error){
            res.status(404).send("error")
        }
    }
}

module.exports=AllController