import User from './User';
import {CUSTOMER_TYPE} from '../utils/env';
class Customer extends User {
  constructor() {
    super();
    super.withUserType(CUSTOMER_TYPE);
  }
}

export default Customer;
