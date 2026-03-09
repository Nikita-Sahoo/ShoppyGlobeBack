const router = require("express").Router();
const { register, login } = require("../controllers/authController");

// Auth Routers 
router.post("/register", register);

router.post("/login", login);

module.exports = router;