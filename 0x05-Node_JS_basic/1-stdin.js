/**
 * This script prompts the user to enter their name and displays it.
 * It listens for user input from the standard input stream (stdin)
 *  and writes the name to the standard output stream (stdout).
 * The script terminates when the user ends the input stream.
 */
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
