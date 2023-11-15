const { UserModel } = require("../model/UserModel")


const getAlllUser = async (req,res) =>{
    try {
        const allUser = await UserModel.find({})
        
        res.status(200).json({
            status: true,
            message: "get all successsfully",
            data: allUser
        })

      
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getAlllUser
}