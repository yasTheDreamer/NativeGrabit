import CustomerBuilder from "../models/CustomerBuilder";
import CourierBuilder from "../models/CourierBuilder";

export const buildCustomer = (req) => {
  const customer = new CustomerBuilder()
    .withFullName(req.body.fullName)
    .withCity(req.body.city)
    .withTelephone(req.body.telephone)
    .withEmail(req.body.email)
    .withUserType()
    .withPicture(req.body.picture)
    .withActifAs()
    .build();

  return customer;
};

export const buildCourier = (req) => {
  const courier = new CourierBuilder()
    .withFullName(req.body.fullName)
    .withEmail(req.body.email)
    .withCity(req.body.city)
    .withTelephone(req.body.telephone)
    .withPicture(req.body.picture)
    .withActifAs(req.body.actif)
    .build();

  return courier;
};
