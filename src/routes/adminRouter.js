const { adminLogin, signUp } = require("../controllers/adminController");

const router = require("express").Router();

router.post("/signUp", signUp);

router.post("/adminLogin", adminLogin);

module.exports = router;
