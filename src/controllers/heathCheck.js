const healthCheck = (req, reply) => {
  reply.send({ status: "up", duration: "" });
};

module.exports = { healthCheck };
