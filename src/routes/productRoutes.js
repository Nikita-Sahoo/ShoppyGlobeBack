const router = require("express").Router();

const {
  addProduct,
  } = require("../controllers/productController");


router.get("/products", getProducts);
router.post("/product", addProduct);
router.get("/products/:id", getProductById);
router.put("/product/:id", updateProduct);


module.exports = router;