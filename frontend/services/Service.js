export default class Service {
  constructor() {
    if (new.target === Service)
      throw new TypeError("can't create abstract strategy object");

    if (!this.save) {
      throw new Error('have to implement save method');
    }
  }
}
