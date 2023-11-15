    const { UserModel } = require("../model/UserModel")
    const bcrypt  = require('bcryptjs')
    const jwt = require('jsonwebtoken');


    
    const { generateToken } = require("../services/generateToken")



    const SignUp  = async (req,res) =>{
        try {
            const {username, email, number_phone, password} = req.body



            if(!username){
                res.status(500).json(
                    {
                        status: false,
                        message: "Vui lòng nhập username"
                    }
                )
                return
            }
            
            if(!email){
                res.status(500).json(
                    {
                        status: false,
                        message: "Vui lòng nhập email"
                    }
                )
                return
            }       
                
            if(!number_phone){
                res.status(500).json(
                    {
                        status: false,
                        message: "Vui lòng nhập số điện thoại"
                    }
                )
                return
            }
                
            if(!password){
                res.status(500).json(
                    {
                        status: false,
                        message: "Vui lòng nhập mật khẩu    "
                    }
                )
                return
            }

            const token =  generateToken()
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new  UserModel({
                username: username,
                email: email,
                number_phone : number_phone,
                password: hashedPassword,
                accessToken: token,
            })
            const savedUser = await newUser.save()

            res.status(200).json(
                {
                    status: true,
                    message: "Đăng kí tài khoản thành công",
                    data: savedUser
                }
            )


        } catch (error) {
           console.log(error);
        }
    }





    const  SignIn =  async(req,res) =>{
        try {
            const { email, password} = req.body

            if(!email){
                res.status(500).json(
                    {
                        status: false,
                        message: "Vui lòng nhập emnail"
                    }
                )
                return
            }
            if(!password){
                res.status(500).json(
                    {
                        status: false,
                        message: "Vui lòng nhập mật khẩu    "
                    }
                )
                return
            }



            const user = await UserModel.findOne({
                email: email
            });

        
            if(!user){
                res.status(500).json(
                    {
                        status: true,
                        message: "Email không tồn tại !!!",
                       
                    }
                )   
                return
            }



            

            const passwordHash = user.password
            const isPassword = await bcrypt.compare(password, passwordHash);
            if(isPassword){
                
                const accessToken = await generateAccessToken(user);
                const refreshToken = await generateRefreshToken(user);
 


                req.headers.authorization  = accessToken
                res.status(200).json(
                    {
                        status: true,
                        message: "Đăng nhập thành công !!!",
                        token: accessToken,
                        data: user
                       
                    }
                )   



            }else{
                res.status(500).json(
                    {
                        status: false,
                        message: "Mật khẩu không chính xác !!!",
                       
                    }
                )   
                return
            }

        } catch (error) {
            console.log(error);
        }
    }



    const generateAccessToken = async (user) => {
        try {
            const key = process.env.ACCESS_TOKEN_SECRET;
            const expiresIn = process.env.ACCESS_TOKEN_LIFE;
            return jwt.sign({
                username: user.username,
                email: user.email,
                role: user.role
            }, key, { expiresIn: expiresIn });
        } catch (error) {
            // Handle error
        }
    }

    const generateRefreshToken = async (user) =>{
        try {
            const key = process.env.ACCESS_TOKEN_SECRET
            const expiresIn = process.env.ACCESS_TOKEN_LIFE
            jwt.sign({
                username: user.username,
                emaiil  : user.email,
                role: user.role
                
            },
            {key, expiresIn: "100d"}
            )
        } catch (error) {
            
        }
    }




    module.exports = {
        SignUp,
        SignIn
    }