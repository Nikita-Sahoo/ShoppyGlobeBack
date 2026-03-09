const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { addToCart, updateCart, deleteCart } = require("../controllers/cartController");

router.post("/cart", auth, addToCart);


module.exports = router;