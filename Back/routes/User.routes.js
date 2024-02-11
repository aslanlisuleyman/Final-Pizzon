const express=require("express")
const router=express.Router()


const userController=require("../controller/User.controller")

router.route("/register").post(userController.createUser)


module.exports=router
