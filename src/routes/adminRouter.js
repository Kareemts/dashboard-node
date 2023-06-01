const { adminLogin } = require("../controllers/adminController");

const router = require("express").Router();

router.post("/adminLogin", adminLogin);

module.exports = router;
