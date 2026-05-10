const express = require("express");

const router = express.Router();

const {
  showProducts,
  addProduct,
  changeProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/show", showProducts);

router.post("/add", addProduct);

router.put("/change/:id", changeProduct);

router.delete("/delete/:id", deleteProduct);

module.exports = router;
