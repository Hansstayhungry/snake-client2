//client.js

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  console.log("Connecting ...");

  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: HAN");
    // setInterval(() => {
    //   conn.write("Move: up");
    //  }, 50);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

// connect();

module.exports = { connect };