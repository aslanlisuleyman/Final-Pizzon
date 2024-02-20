
const express=require("express")
const router=express.Router()

const userController=require("../controller/Employee.controller")


router.get("/",userController.getAll)
router.get("/:id",userController.getById)
router.delete("/:id",userController.delete)
router.post("/",userController.add)
router.put("/:id",userController.edit)

module.exports=router


