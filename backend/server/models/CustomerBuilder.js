import UserBuilder from "./UserBuilder";
import env from "dotenv";
const dotenv = env.config();

class CustomerBuilder extends UserBuilder {
  constructor() {
    super();
    super.withUserType(parseInt(process.env.CUSTOMER_TYPE));
  }
}

export default CustomerBuilder;
