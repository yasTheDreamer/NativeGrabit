import express from "express";
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/customer", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify("i'm here"));
});

export default router;
