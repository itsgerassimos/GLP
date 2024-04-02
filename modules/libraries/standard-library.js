// Define functions for the standard library as raw code
const stdlibCode = `
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero!");
  }
  return a / b;
}

function exp(a, b) {
  return a^b;
}

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

function actions(...funcs) {
  funcs.forEach(func => {
    if (typeof func === 'function') {
      func();
    } else if (Array.isArray(func) && typeof func[0] === 'function') {
      func[0](...func.slice(1));
    }
  });
}
`;

// Export the raw code as a string
module.exports = stdlibCode;
