///// Math

//// Operations

/// Returns the addition result of ...args
/// @param {...number} args - Numbers to add.
/// @returns {number} - The sum of all numbers.
function add(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
  }
  
  /// Returns the subtraction result of ...args
  /// @param {...number} args - Numbers to subtract.
  /// @returns {number} - The result of subtraction.
  function subtract(...args) {
    return args.reduce((acc, curr) => acc - curr);
  }
  
  /// Returns the multiplication result of ...args
  /// @param {...number} args - Numbers to multiply.
  /// @returns {number} - The result of multiplication.
  function multiply(...args) {
    return args.reduce((acc, curr) => acc * curr, 1);
  }
  
  /// Returns the division result of 2 args
  /// @param {number} a - The dividend.
  /// @param {number} b - The divisor.
  /// @returns {number} - The result of division.
  /// @throws {Error} - If division by zero is attempted.
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero!");
    }
    return a / b;
  }
  
  /// Returns first arg to the power of second
  /// @param {number} a - The base.
  /// @param {number} b - The exponent.
  /// @returns {number} - The result of exponentiation.
  function exp(a, b) {
    return a ** b;
  }
  
  //// Numbers
  
  /// Returns special number up to *digits* decimal digits
  /// @param {string} constant - The constant value to return ("p" for pi or "e" for Euler's number).
  /// @param {number} digits - The number of decimal digits.
  /// @returns {string} - The constant value with the specified number of decimal digits.
  function number(constant, digits) {
      switch (constant) {
          case "p":
              return Math.PI.toFixed(digits);
          case "e":
              return Math.E.toFixed(digits);
          default:
              return "Invalid constant. Use 'p' for pi or 'e' for Euler's number.";
      }
  }
  
  //// Data Types
  
  /// Converts the input value to the specified type.
  ///
  /// @param {string} typea - The type to convert to. Possible values: "int", "decimal", "array", "string", "boolean", "date", "object", "function".
  /// @param {*} a - The value to convert.
  /// @returns {*} - The input value converted to the specified type.
  function type(typea, a) {
      switch (typea) {
          case "int":
              return parseInt(a);
          case "decimal":
              return parseFloat(a).toFixed(2); // Fixed to 2 decimal places
          case "array":
              return Array.from(arguments).slice(1);
          case "string":
              return String(a);
          case "boolean":
              return Boolean(a);
          case "date":
              return new Date(a);
          case "object":
              return Object(a);
          case "function":
              return typeof a === "function";
          default:
              return "Invalid type.";
      }
  }
  
  //// I/O
  
  /// Print messages to the console.
/// @param {...*} args - The messages to print.
function print(...args) {
    args.forEach(arg => console.log(arg));
  }
  
/// Print messages to the console.
/// @param {...*} args - The messages to print.
function log(...args) {
    console.log(...args);
  }

  /// Input function is not available yet! As it was bugged...

  /// Known Bug! Fix coming soon! Read input from the user.
  /// @param {string} prompt - The prompt to display to the user.
  /// @returns {Promise<string>} - A promise resolving to the user's input.
  // function input(prompt) {
  //   return new Promise((resolve) => {
  //     IOS.question(prompt, (userInput) => {
  //       resolve(userInput);
  //     });
  //   });
  // }
  
  //// Comparison
  function more(a, b) {
    return a > b;
  }
  
  function less(a, b) {
    return a < b;
  }
  
  //// Multiple Sequential Function Calls
  function actions(...funcs) {
    funcs.forEach((func) => {
      if (typeof func === "function") {
        func();
      } else if (Array.isArray(func) && typeof func[0] === "function") {
        func[0](...func.slice(1));
      }
    });
  }
  
  //// Arrays
  
  /// Create an array with the given values.
  /// @param {...*} values - The values to include in the array.
  /// @returns {Array<*>} - The newly created array.
  function createArray(...values) {
    return values;
  }
  
  /// Push a value to an array.
  /// @param {Array<*>} arr - The array to push to.
  /// @param {*} value - The value to push.
  /// @returns {Array<*>} - The array after pushing the value.
  function pushToArray(arr, value) {
    arr.push(value);
    return arr;
  }
  
  /// Remove the last element from an array.
  /// @param {Array<*>} arr - The array to pop from.
  /// @returns {Array<*>} - The array after popping.
  function popArray(arr) {
    arr.pop();
    return arr;
  }
  
  /// Remove an element from an array at a specific index.
  /// @param {Array<*>} arr - The array to splice.
  /// @param {number} n - The index to remove the element from.
  /// @returns {Array<*>} - The array after splicing.
  function spliceArray(arr, n) {
    if (n < 0 || n >= arr.length) {
      return arr; // Return the original array if index is out of bounds
    }
    arr.splice(n, 1); // Remove the element at index n
    return arr;
  }

  ///
  function comment (...values){
    return
  }
  