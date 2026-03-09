const Cart = require("../models/Cart");


// add-to-cart 
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const cart = await Cart.create({
    userId: req.user.id,
    productId,
    quantity
  });

  res.json(cart);
};

// update cart 
exports.updateCart = async (req, res) => {
  const cart = await Cart.findByIdAndUpdate(
    req.params.id,
    { quantity: req.body.quantity },
    { new: true }
  );

  res.json(cart);
};

// delete cart 
exports.deleteCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
};