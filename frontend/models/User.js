class User {
  constructor() {
    this.User = {};
  }

  withId(id) {
    this.User.id = id;
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
    this.User.tel = tel;
  }

  withEmail(email) {
    this.User.email = email;
    return this;
  }

  withUserType(userType) {
    this.User.type = userType;
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

export default User;
