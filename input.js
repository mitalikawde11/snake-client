const { moveCmd, message } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};


// this function is a 'data' callback handler for stdin
// handling user input
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.stdout.write('\n');
    process.exit();
  }

  // mapping movement commands
  for(const e in moveCmd) {
    if(key === e) {
      connection.write(moveCmd[key]); // sending movement command to the server
    }
  }
  
  // message mapping
  for(const e in message) {
    if(key === e) {
      connection.write(message[key]);
    }
  }
          
};



module.exports = { setupInput };


