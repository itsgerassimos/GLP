const { tokenType } = require("./tokenType.js");
const { isDigit, isAlpha, isStringSymbol, isParen } = require("./isType.js");

function addVarIfEqualPresent(inputString) {
  if (inputString.includes("=")) {
    return "var " + inputString;
  } else {
    return inputString;
  }
}

function tokenize(input) {
  const tokens = [];
  let currentString = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (isAlpha(char) || isDigit(char) || isStringSymbol(char)) {
      currentString += char;
    } else {
      if (currentString !== "") {
        if (!isNaN(currentString)) {
          tokens.push({
            type: tokenType.INT,
            value: parseFloat(currentString),
          });
        } else {
          currentString = addVarIfEqualPresent(currentString);

          tokens.push({
            type: tokenType.STRING,
            value: currentString,
          });
        }
        currentString = "";
      }

      if (isParen(char)) {
        tokens.push({
          type: isParen(char)
            ? char === "("
              ? tokenType.START_PAREN
              : tokenType.END_PAREN
            : tokenType.UNDEFINED_SYMBOL,
          value: char === "(" ? "START_PAREN" : "END_PAREN",
        });
      } else if (char === " ") {
        continue;
      } else {
        tokens.push({
          type: tokenType.UNDEFINED_SYMBOL,
          value: char,
        });
      }
    }
  }

  if (currentString !== "") {
    if (!isNaN(currentString)) {
      tokens.push({
        type: tokenType.INT,
        value: parseFloat(currentString),
      });
    } else {
      tokens.push({
        type: tokenType.STRING,
        value: currentString,
      });
    }
  }

  tokens.push({ type: tokenType.EOF, value: "EOF" });
  return tokens;
}

module.exports = { tokenize };
