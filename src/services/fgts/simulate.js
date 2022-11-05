const simulate = ({ payload }) => {
  // called sales order service (Integration)

  // producer message for update CRM service (Queue)

  // create or update customer in database (integration)

  // Return simulation to customer
  const data = { status: "available", availableValue: "2000" };
  
  return data;
};

module.exports = { simulate };
