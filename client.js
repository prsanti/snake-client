const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    // Other server host & port id
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: PS");
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // console logs data from the server to the player
  conn.on('data', data => console.log(data));

  return conn;
}

module.exports = {
  connect
};