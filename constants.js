//  CONSTANT_VALUES into a separate module.

const IP = "localhost"; //"localhost";  // IP address (host)
const PORT = 50541 ; // PORT number

const moveCmd = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

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