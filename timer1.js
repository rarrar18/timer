// Implement an alarm clock / timer which will beep after a specified amount of time has passed. Specify an unlimited number of alarms using command line arguments
// Returns array of command line arguments
let input = (process.argv.slice(2));
// Define function which beeps based on command line arguments
const timer = function(input) {
  // Iterate through every element of input
  for (let i of input) {
    // Check if input is a positive number
    if (i > 0) {
      // Beep wait time is converted from seconds to milliseconds
      let seconds = i * 1000;
      setTimeout( () => {
        // Perform system sound after number of seconds
        process.stdout.write('\x07');
        console.log(`${i} seconds`);
      }, seconds)
    }
  }
};
// Execute timer function
timer(input);