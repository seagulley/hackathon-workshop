const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { collection: 'products' }
)

module.exports = mongoose.model('Product', ProductSchema)
