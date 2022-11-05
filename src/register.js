const routes = require("./routes");

module.exports = (fastify) =>
  fastify.register(
    (server, options, next) => {
      routes(server, options, next);
      next();
    },
    { prefix: "/v1" }
  );
