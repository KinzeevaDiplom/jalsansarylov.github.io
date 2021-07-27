const { Router } = require("express");
const router = Router();
const controller = require("../controllers/clicker");

router.get("/", controller.getCounter);

router.patch("/", controller.updateCounter);

router.post("/", controller.createCounter);

module.exports = router;
