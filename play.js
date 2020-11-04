const { connect } = require('./client');
console.log('Connecting ...');
connect();


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    // process.stdout.write(key);
  };

  // need to REFERENCE the function, not call it like handleUserInput('data')
  stdin.on('data', handleUserInput);

  return stdin;

};

setupInput();