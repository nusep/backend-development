const express = require("express");

const router = express.Router();

const {
  showCategory,
  addCategory,
} = require("../controllers/categoryController");

router.get("/category/show", showCategory);

router.post("/category/add", addCategory);

module.exports = router;
