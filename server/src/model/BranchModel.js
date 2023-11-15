
const mongoose = require('mongoose')

const Schema = mongoose.Schema

let BranchSchema = new Schema ({
    code_Branch : {
        type: String,
        require: true
    },
    name_Branch: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    province_code: {
        type: String,
        require: true
    },
    created_date: { 
        type: Date,
        default: Date.now
    },
    update_date: {
        type: Date,
        default: Date.now
    }


}, {collection: 'Branch'})

const BranchModel = mongoose.model('Branch', BranchSchema);


module.exports = { 
  BranchModel 
};
