
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

function print(message) {
  console.log(message);
}

function ifelse(condition, trueValueOrFunc, falseValueOrFunc) {
  if (condition) {
      if (typeof trueValueOrFunc === 'function') {
          return trueValueOrFunc();
      } else {
          return trueValueOrFunc;
      }
  } else {
      if (typeof falseValueOrFunc === 'function') {
          return falseValueOrFunc();
      } else {
          return falseValueOrFunc;
      }
  }
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
function sub(b, a){return(subtract(b,a))}; print(sub(3,2)); var a=5; print(a);