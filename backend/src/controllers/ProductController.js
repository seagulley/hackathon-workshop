const Product = require('../models/Product')

module.exports = {
  create: async (req, res) => {
    const newItem = new Product(req.body)
    try {
      const createdItem = await Product.create(newItem)
      res
        .status(201)
        .json({ message: 'Item created successfully', createdItem })
    } catch (err) {
      res.status(500).json({ message: err })
    }
  }
}
