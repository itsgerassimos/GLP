function generate(ast) {
  if (!Array.isArray(ast)) {
    ast = [ast];
  }

  let result = "";

  for (let i = 0; i < ast.length; i++) {
    const node = ast[i];

    if (node.functionName === "makeFunction") {
      const funcName = node.functionArgs[0].replace(/^"|"$/g, ""); // Remove leading and trailing quotes
      const [funcBody, ...args] = node.functionArgs.slice(1);
      result += `function ${funcName}(${args
        .map((arg) => arg.replace(/^"|"$/g, ""))
        .join(", ")}){return(${generate(funcBody)})}`; // Handle nested function calls recursively
    } else {
      result += `${node.functionName}(`;

      if (Array.isArray(node.functionArgs)) {
        result += node.functionArgs
          .map((arg, index) => {
            if (typeof arg === "object" && arg !== null) {
              return generate(arg); // Handle nested function calls recursively
            } else {
              return `${arg}`; // Ensure string arguments are enclosed in double quotes
            }
          })
          .join(",");
      } else {
        result += `"${node.functionArgs}"`; // If functionArgs is a single string, enclose it in double quotes
      }

      result += ")";
    }

    if (i !== ast.length - 1) {
      result += ";"; // Add a semicolon after each function call except for the last one
    }
  }

  return result;
}

module.exports = {
  generate,
};
