const heathCheckControllers = require("../controllers/heathCheck");

module.exports = [
  {
    method: "GET",
    url: "/heath-check",
    handler: heathCheckControllers.healthCheck,
    schema: {
      summary: "Check if the API is up and running",
      tags: ["Status"],
      response: {
        200: {
          status: {
            description: "The status if the API is working or not",
            type: "string",
            enum: ["up", "down"],
          },
          totalDuration: { description: "Execution time", type: "string" },
        },
      },
    },
  },
];
