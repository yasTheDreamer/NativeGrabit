import UserBuilder from "./UserBuilder";
import env from "dotenv";
const dotenv = env.config();

class CustomerBuilder extends UserBuilder {
  constructor() {
    super();
  }

  withUserType() {
    super.withUserType(parseInt(process.env.CUSTOMER_TYPE));
    return this;
  }

  withActifAs() {
    super.withActifAs(null);
    return this;
  }
}

export default CustomerBuilder;
