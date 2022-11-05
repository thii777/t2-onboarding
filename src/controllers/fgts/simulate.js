const service = require("../../services/fgts");

const simulate = ({ body }, reply) => {
  const data = service.simulate({ body });
  // called sales order service (Integration)

  // producer message for update CRM service (Queue)

  // create or update customer in database (integration)

  // Return simulation to customer

  reply.code(201).send(data);
};

module.exports = { simulate };
