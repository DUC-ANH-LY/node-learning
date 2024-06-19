require("colors");
console.log("hello".green); // outputs green text
console.log("world!".red); // outputs red text
console.log("Feeling yellow".yellow); // outputs yellow text
console.log("But you look blue".blue); // outputs yellow text
console.log("This should cheer you up!".rainbow); // rainbow

function getRed(str) {
  // Changes the console foreground to red
  var redCode = "\x1b[31m";
  // Resets the console foreground
  var clearCode = "\x1b[39m";
  return redCode + str + clearCode;
}
console.log(getRed("Hello World!"));

// https://www.bit-101.com/2017/2022/11/ansi-escape-codes/
