class Context {
  constructor(strategy) {
    this.Strategy = strategy;
  }

  executeSaveUser(data) {
    this.Strategy.save(data);
  }
}

export default Context;
