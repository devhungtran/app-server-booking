const { UserModel } = require("../model/UserModel")


const getAlllUser = async (req,res) =>{
    try {
        const allUser = await UserModel.find({})
        
        res.status(200).json({
            status: true,
            message: "get all successsfully",
            data: allUser
        })
        console.log(req.headers.authorization);

      
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getAlllUser
}