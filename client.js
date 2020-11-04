const net = require('net');
// Other server host & port id
// PORT: 50542
// HOST: 135.23.222.131
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
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // console logs data from the server to the player
  conn.on('data', data => console.log(data));

  return conn;
}

module.exports = {
  connect
};