import UserRepositoryImpl from "../repositories/UserRepositoryImpl";
import UserService from "./UserService";
import User from "../models/UserBuilder";

class UserServiceImpl extends UserService {
  constructor() {
    super();
  }

  saveUser(user) {
    //business logic
    if (!user && typeof user === "object") {
      try {
        UserRepositoryImpl.update(user);
      } catch (err) {
        console.log("user may be undefined or not well structured");
      }
    }
  }
}

export default UserServiceImpl;
