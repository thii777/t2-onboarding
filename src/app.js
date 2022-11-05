const Fastify = require("fastify");
const appRegister = require("./register");

class App {
  constructor(opts = {}) {
    this.server = new Fastify(opts);
    this.register();
  }

  register() {
    appRegister(this.server);
  }
}

module.exports = App;
