const App = require("./app");

const server = async () => {
  const port = process.env.PORT;

  const app = new App({
    logger: true,
  });

  app.server.listen(port, "0.0.0.0", (err) => {
    if (err) {
      app.server.log.error(`Fail to start server: ${err}`);
      process.exit(1);
    }
  });
};

module.exports = server();
