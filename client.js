const net = require('net');
    // // My server host & port id
    // host: '10.0.2.15',
    // port: 50541
//
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    // Other server host & port id
    host: '135.23.222.131',
    port: 50542
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