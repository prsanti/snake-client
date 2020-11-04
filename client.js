const net = require('net');
// Other server host & port id
    // host: '135.23.222.131',
    // port: 50542
//
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    // My server host & port id
    host: '10.0.2.15',
    port: 50541
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: PS");
    // conn.write("Move: up");
    // setInterval(() => conn.write("Move: up"), 50);
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  });

  // Moves up when first connecting to server (could write in first conn.on statement)
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  //   conn.write("Move: up");

  // });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // console logs data from the server to the player
  conn.on('data', data => console.log(data));

  return conn;
}

module.exports = {
  connect
};