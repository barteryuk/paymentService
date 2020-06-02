const router = require("express").Router();
const paymentRoutes = require("./payment");

router.get("/", (req, res) => res.send("welcome to paymentService"));
router.use("/payments", paymentRoutes);

module.exports = router;
