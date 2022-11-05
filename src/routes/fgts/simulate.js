const fgtsControllers = require("../../controllers/fgts");

module.exports = [
  {
    method: "POST",
    url: "/fgts-simulation",
    handler: fgtsControllers.simulate,
    schema: {
      summary: "simulates loan operation with fgts guarantee",
      tags: ["Status"],
      response: {
        200: {
          status: {
            description:
              "Informs whether or not the customer has available value",
            type: "string",
            enum: ["available", "not available"],
          },
          availableValue: {
            description: "Amount available for loan",
            type: "string",
          },
        },
      },
    },
  },
];
