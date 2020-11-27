import User from './User';
import {COURIER_TYPE} from '../utils/env';

class Courier extends User {
  constructor() {
    super();
    super.withUserType(COURIER_TYPE);
  }
}

export default Courier;
