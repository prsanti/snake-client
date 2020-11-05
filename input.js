// Stores the active TCP connection object.
let connection;

const { MOVE } = require('./constants')
const { messages } = require('./constants')
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    }

    if (key === 'w') {
      connection.write(MOVE.UP);
    }

    if (key === 'a') {
      connection.write(MOVE.LEFT);
    }

    if (key === 's') {
      connection.write(MOVE.DOWN);
    }

    if (key === 'd') {
      connection.write(MOVE.RIGHT);
    }

    if (key === 'p') {
      connection.write(messages.pog);
    }

    if (key === '3') {
      connection.write(messages.heart);
    }

    if (key === '1') {
      connection.write(messages.smile);
    }
  };

  // need to REFERENCE the function, not call it like handleUserInput('data')
  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};