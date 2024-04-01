function parse(tokens) {
  const AST = [];

  while (tokens.length > 0) {
    if (tokens[0].type === "EOF") {
      tokens.shift();
      break;
    }
    if (tokens[0].type === "START_PAREN") {
      tokens.shift(); // Consume START_PAREN
      const nestedAST = parse(tokens); // Recursive call to parse nested function
      AST.push(nestedAST);
    } else if (tokens[0].type === "END_PAREN") {
      tokens.shift(); // Consume END_PAREN
      break; // Break the loop when encountering the closing parenthesis
    } else {
      const functionName = tokens[0].value;
      tokens.shift(); // Consume function name

      const functionArgs = [];

      while (tokens.length > 0 && tokens[0].type !== "END_PAREN") {
        if (tokens[0].type === "START_PAREN") {
          // Handle nested expression
          tokens.shift(); // Consume START_PAREN
          const nestedAST = parse(tokens); // Recursive call to parse nested function
          functionArgs.push(nestedAST); // Push nested AST as an argument
        } else {
          let argValue = tokens[0].value;
          // Wrap string arguments in double quotes
          if (typeof argValue === "string") {
            argValue = `"${argValue}"`;
          }
          tokens.shift(); // Consume argument token
          functionArgs.push(argValue);
        }
      }
      AST.push({ functionName: functionName, functionArgs: functionArgs });
    }
  }

  return AST.length === 1 ? AST[0] : AST; // Return
}

module.exports = {
  parse,
};
