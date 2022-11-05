const Fastify = require("fastify");
const appRegister = require("./register");

class App {
  constructor(opts = {}) {
    this.server = new Fastify(opts);
    this.register();
  }

  register() {
    // this.server.register(async (server) => server.route(healthCheck));
    appRegister(this.server);
  }
}

module.exports = App;
