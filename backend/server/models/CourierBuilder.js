import UserBuilder from "./UserBuilder";
import env from "dotenv";

const dotenv = env.config();

class CourierBuilder extends UserBuilder {
  constructor() {
    super();
  }

  withUserType() {
    super.withUserType(parseInt(process.env.COURIER_TYPE));
    return this;
  }
}

export default CourierBuilder;
