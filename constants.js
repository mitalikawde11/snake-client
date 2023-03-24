// CONSTANT_VALUES into a separate module.

const IP = "localhost"; // IP address (host)
const PORT = 50541 ; // PORT number

// movement command object
const moveCmd = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

// message object
const message = {
  x: "Say: go crazy",
  z: "Say: hungry snake"
};




module.exports = {
  IP,
  PORT,
  moveCmd,
  message,
};