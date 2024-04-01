function splitTokens(tokens) {
  const groupedTokens = [];
  let currentGroup = [];
  let parenCount = 0;

  for (const token of tokens) {
    if (token.type === "UNDEFINED_SYMBOL" && token.value === ";") {
      continue; // Skip semicolon tokens
    } else if (token.type === "START_PAREN") {
      parenCount++;
      currentGroup.push(token); // Always add the starting parenthesis to the current group
    } else if (token.type === "END_PAREN") {
      parenCount--;
      currentGroup.push(token); // Always add the closing parenthesis to the current group
      if (parenCount === 0) {
        groupedTokens.push(currentGroup);
        currentGroup = [];
      }
    } else {
      currentGroup.push(token);
    }
  }

  return groupedTokens;
}

module.exports = { splitTokens };
