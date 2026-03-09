const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { addToCart, updateCart, deleteCart } = require("../controllers/cartController");

router.post("/cart", auth, addToCart);
router.put("/cart/:id", auth, updateCart);
router.delete("/cart/:id", auth, deleteCart);

module.exports = router;