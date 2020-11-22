import UserBuilder from "./UserBuilder";
import env from "dotenv";

const dotenv = env.config();

class CourierBuilder extends UserBuilder {
  constructor() {
    super();
    super.withUserType(parseInt(process.env.COURIER_TYPE));
  }
}

export default CourierBuilder;
