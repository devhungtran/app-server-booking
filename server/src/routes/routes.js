const { models } = require('mongoose');
const { GetAllProduct, GetProductByMaSP } = require('../controller/ProductController');
const { ProductModel } = require('../model/ProductModel');
const { getAllService, createService } = require('../controller/ServiceController');
const { ServiceModel } = require('../model/ServiceModel');
const { SignUp, SignIn } = require('../controller/AuthController');
const { getAllBranch, createBranch } = require('../controller/BranchController');
const { generateCodeDiscount } = require('../controller/CodeDiscountController');
const route = require('express').Router();



route.get('/', (req, res) => {
   
});


// API
// AUTHENCATION
route.post('/auth/signup', SignUp)
route.post('/auth/signin', SignIn)




// SẢN PHẨM

route.get('/product/get-all', GetAllProduct)
route.get('/get-prodcut/:masp', GetProductByMaSP)



// CHI NHÁNH
route.get('/branch/get-all', getAllBranch)
route.post('/branch/create', createBranch)

// mã giảm giá



//


// SERVICE
route.get('/service/get-all', getAllService)
route.post('/service/create', createService)





module.exports = { route }