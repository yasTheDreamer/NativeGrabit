import Service from './Service';
import {saveUser} from '../api/usersApi';

class CustomerService extends Service {
  constructor() {
    super();
  }

  save(data) {
    saveUser(data);
  }
}

export default CustomerService;
