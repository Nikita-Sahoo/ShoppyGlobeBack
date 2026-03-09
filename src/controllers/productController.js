const Product = require("../models/Product");

// add Products 
exports.addProduct = async (req, res) => {
  const { name, price, description, stock } = req.body;

  const product = await Product.create({
    name, price, description, stock });

  res.json({
    message: "Product added successfully",
    product
  });
};

// Fetch all products 
exports.getProducts = async (req, res) => {
  const products = await Product.find();

  res.json({
    message: "Products fetched successfully",
    products
  });
};

// fetch products by id 
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.json({
    message: "Product fetched successfully",
    product
  });
};

// update Products 
exports.updateProduct = async (req, res) => {
  const { name, price, description, stock } = req.body;

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { name, price, description, stock },
    { new: true }
  );

  res.json({
    message: "Product updated successfully",
    product
  });
};


// Delete Products 
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);

  res.json({
    message: "Product deleted successfully"
  });
};