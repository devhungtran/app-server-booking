

const mongose = require('mongoose')


const Schema = mongose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type:  String,
        require: true
    },
    number_phone:{
        type:String,
        require: true
    },
    password: {
        type: String,
        require: true,
    },
    isAcctive:{
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: "/uploads/img/avt.png"
    },
    role: {
        type: String,
        default: "staff"
    },
    balance: {
        type: Number,
        default: 0
    },
    accessToken: {
        type: String,
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    update_date: {
        type: Date,
        default: Date.now
    }

}, {collection: "users"})


const UserModel = mongose.model('user', UserSchema)


module.exports = {UserModel}