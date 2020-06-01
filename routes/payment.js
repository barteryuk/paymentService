const router = require("express").Router();
const Controller = require("../controllers/payment.js");

router.get("/", Controller.findAll);
router.post("/", Controller.create);
router.get("/:id", Controller.findById);
router.put("/:id", Controller.put);

module.exports = router;
