function generate(ast) {
  if (!Array.isArray(ast)) {
    ast = [ast];
  }

  let result = "";

  for (let i = 0; i < ast.length; i++) {
    const node = ast[i];

    if (node.functionName === "makeFunction") {
      const funcName = node.functionArgs[0].replace(/^"|"$/g, ""); // Remove leading and trailing quotes
      const [funcBody, funcReturn, ...args] = node.functionArgs.slice(1);
      result += `function ${funcName}(${args
        .map((arg) => arg.replace(/^"|"$/g, ""))
        .join(", ")}){${generate(funcBody)};return(${generate(funcReturn)})}`; // Handle nested function calls recursively
    } else if (node.functionName === "if" | node.functionName === "ifelse") {
      const condition = generate(node.functionArgs[0]);
      const ifBlock = generate(node.functionArgs[1]);
      const elseBlock = node.functionArgs[2] ? generate(node.functionArgs[2]) : "";
      result += `if (${condition}) {${ifBlock}}${elseBlock ? ` else {${elseBlock}}` : ""}`;
    } else if (node.functionName === "create") {
      const variableName = node.functionArgs[0] ? node.functionArgs[0].replace(/^"(.*)"$/, "$1") : "";
      const variableValue = node.functionArgs[1] ? generate(node.functionArgs[1]) : undefined;
      result += `let ${variableName}${variableValue ? ` = ${variableValue}` : ""}`;
    } else if (node.functionName === "set") {
      const variableName = node.functionArgs[0] ? node.functionArgs[0].replace(/^"(.*)"$/, "$1") : "";
      const variableValue = node.functionArgs[1] ? generate(node.functionArgs[1]) : undefined;
      result += `${variableName}${` = ${variableValue}`}`;
    } 
    else {
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
