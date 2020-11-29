import express from "express";
import { buildCustomer, buildCourier } from "../utils/BuilderFunctions";
import UserService from "../services/UserServiceImpl";

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/customer", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  const customer = buildCustomer(req);
  const customerService = new UserService();
  console.log(customer);
  customerService.saveUser(customer);
  res.send(JSON.stringify("customer saved succefully"));
});

router.post("/courier", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  const courier = buildCourier(req);
  const courierService = new UserService();
  console.log(courier);
  courierService.saveUser(courier);
  res.send(JSON.stringify("courier saved succefully"));
});

export default router;
