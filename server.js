require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/conn");

const authRoutes = require("./src/routes/authRoutes");


const app = express();

app.use(express.json());

connectDB();

app.use("/api", authRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});