// Define functions for the standard library as raw code
const stdlibCode = `
// Math
function add(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

function subtract(...args) {
  return args.reduce((acc, curr) => acc - curr);
}

function multiply(...args) {
  return args.reduce((acc, curr) => acc * curr, 1);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero!");
  }
  return a / b;
}

function exp(a, b) {
  return a**b;
}

// I/O

function print(message) {
  console.log(message);
}

function input(prompt) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      rl.close();
      resolve(input);
    });
  });
}


// Comparison
function more(a,b) {
  if(a>b){
    return true;
  } else {
    return false;
  }
}

function less(a,b) {
  if(a<b){
    return true;
  } else {
    return false;
  }
}

// Multiple Sequential Function Calls
function actions(...funcs) {
  funcs.forEach(func => {
    if (typeof func === 'function') {
      func();
    } else if (Array.isArray(func) && typeof func[0] === 'function') {
      func[0](...func.slice(1));
    }
  });
}

// Data Types

// Arrays
function createArray(...values) {
  return values;
}
function pushToArray(arr, value) {
  arr.push(value);
  return arr;
}
function popArray(arr) {
  arr.pop();
  return arr;
}
function spliceArray(arr, n) {
  if (n < 0 || n >= arr.length) {
    return arr; // Return the original array if index is out of bounds
  }
  arr.splice(n, 1); // Remove the element at index n
  return arr;
}

`;

// Export the raw code as a string
module.exports = stdlibCode;
