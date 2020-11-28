import UserRepository from "./UserRepository";
import UserModel from "../db/UserSchema";
class UserRepositoryImpl extends UserRepository {
  constructor() {
    super();
  }

  update(user) {
    const userToUpdate = new UserModel(user);
    userToUpdate.save((err) => {
      throw new Error(err);
    });
  }
}

export default UserRepositoryImpl;
