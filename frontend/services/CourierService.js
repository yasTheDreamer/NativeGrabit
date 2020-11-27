import {saveUser} from '../api/usersApi';
import Service from './Service';

class CourierService extends Service {
  constructor() {
    super();
  }

  save(data) {
    saveUser(data);
  }
}

export default CourierService;
