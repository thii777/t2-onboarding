const heathCheck = require("./heathCheck");
const fgts = require("./fgts");

const routes = [...heathCheck, ...fgts];

module.exports = (server, _opts, done) => {
  routes.map((route) => server.route(route));
  done();
};
