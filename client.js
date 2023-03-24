const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // handle incoming data
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // connect event handler
  // Print a message to the screen when the connection is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    
    // sending a name to the server upon connection
    conn.write("Name: MSK");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = { connect };