const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

const connObj = connect();

// pass the object returned from connect function into the setupInput function
setupInput(connObj);