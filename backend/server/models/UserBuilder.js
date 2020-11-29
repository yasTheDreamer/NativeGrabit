/**
 * builder pattern
 * or fluent interface pattern
 */
import mongoose from "mongoose";

class UserBuilder {
  constructor() {
    this.User = {};
    this.User._id = new mongoose.Types.ObjectId();
  }

  withId(id) {
    this.User._id = id;
    return this;
  }

  withFullName(fullName) {
    this.User.fullName = fullName;
    return this;
  }

  withCity(city) {
    this.User.city = city;
    return this;
  }

  withTelephone(tel) {
    this.User.telephone = tel;
    return this;
  }

  withEmail(email) {
    this.User.email = email;
    return this;
  }

  withUserType(userType) {
    this.User.user_type = userType;
    return this;
  }

  withPicture(pictureUrl) {
    this.User.picture = pictureUrl;
    return this;
  }

  withActifAs(actif) {
    this.User.actif = actif;
    return this;
  }

  build() {
    return this.User;
  }
}

export default UserBuilder;
