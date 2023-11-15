
const mongoose = require('mongoose')

const Schema = mongoose.Schema

let ProductSchema = new Schema ({
    masp: {
      type:  String,
      require: true,
    },
    price: {
        type: Number,
        require: true
    },
    productType: {
        main: String,
        sub: String
    },

    images: {
        type: [String],
        required: true
      },

      isSale: {
        status: {
          type: Boolean,
          default: false
        },
        percent: {
          type: Number,
          default: 0
        },
        end: {
          type: Date
        }
      },

      buyCounts: {
        type: Number,
        required: false,
        default: 0
      },
  
}, {collection: 'products'})

const ProductModel = mongoose.model('Product', ProductSchema);


module.exports = { 
  ProductModel 
};
