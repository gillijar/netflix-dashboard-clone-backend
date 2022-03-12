const express = require("express");
const accountController = require("../controllers/accountController");

const router = express.Router();

router.route("/").post(accountController.createAccount);

router.route("/:id").get(accountController.getAccount);

module.exports = router;
