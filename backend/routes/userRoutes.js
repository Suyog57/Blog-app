const express = require("express");
const { dashboard, register, login } = require("../controllers/userController");

const router = express.Router();

router.get("/", dashboard);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
