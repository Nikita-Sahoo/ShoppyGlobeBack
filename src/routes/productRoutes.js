const router = require("express").Router();

const {
  addProduct,
  } = require("../controllers/productController");


router.post("/product", addProduct);


module.exports = router;