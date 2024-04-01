function isDigit(char) {
  return /[0-9]/.test(char);
}

function isAlpha(char) {
  return /[a-zA-Z]/.test(char);
}

function isStringSymbol(char) {
  return !/[0-9a-zA-Z()\s;]/.test(char);
}

function isParen(char) {
  return char === "(" || char === ")";
}

module.exports = {
  isDigit,
  isAlpha,
  isStringSymbol,
  isParen,
};
