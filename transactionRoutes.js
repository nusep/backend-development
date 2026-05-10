const express = require("express");

const router = express.Router();

const {
  showTransaction,
  addTransaction,
} = require("../controllers/transactionController");

router.get("/transaction/show", showTransaction);

router.post("/transaction/add", addTransaction);

module.exports = router;
