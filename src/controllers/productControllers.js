const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const { name, price, description, stock } = req.body;

  const product = await Product.create({
    name, price, description, stock });

  res.json({
    message: "Product added successfully",
    product
  });
};
