const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const cart = await Cart.create({
    userId: req.user.id,
    productId,
    quantity
  });

  res.json(cart);
};

