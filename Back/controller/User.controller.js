const User=require("../models/User.model")

const createUser = async (req,res) => {
try{
const user = await User.create(req.body);
res.status(201).json({
    succeded:true,
    user,
});
}
catch(error){
    res.status(500).json({
        succeded:false,
    error,
    })

}
}

module.exports={ createUser}