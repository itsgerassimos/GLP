const readline = require("readline");

const IOS = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) =>
  new Promise((resolve) => IOS.question(query, resolve));

module.exports = {
  IOS,
  prompt,
};
