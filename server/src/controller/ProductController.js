const { ProductModel } = require("../model/ProductModel");


const GetAllProduct = async  (req,res) =>{
    try {
       const product = await ProductModel.find({})
       res.json({
        status: true,
        message: "get all product sucessfully",
        data: product
       })
    } catch (error) {
        console.log(error);
    }
}


const GetProductByMaSP =  async(req,res) => {
    try {
        const masp = req.params.masp;

        const findProdcut = await ProductModel.findOne      ({
            masp: masp
        })

        console.log(findProdcut);

    } catch (error) {
        res.status(500).json({
            status: false,
            error: error
        })
    }
}




const CreateProduct = async (req,res) => {
    try {
        
        const masp = req.body.masp
        const name_prodcut = req.body.masp
        const price = req.body.masp
        const productType = req.body.masp
        const images = req.body.masp
        


        ProductModel.create({
            masp: "SRM001",
            name_prodcut: "Sửa rửa mặt",
            price: 290000,
            productType: "SRM",
            images: "Image",
            isSale: {
                status: true,
                percent: 20
            },
    
        })




    } catch (error) {
        
    }
}





module.exports  = {
    GetAllProduct,
    GetProductByMaSP
}