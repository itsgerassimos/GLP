// COPYRIGHT © GERASSIMOS MOUTAGIS 2024

// MAIN FILE:

// 0. OUTPUT WELCOME MESSAGE
// 1. GET USER INPUT
// 2. IF USER TYPED:
//    exit: exit the program
//    file GLP/filename.g: set console input to GLP/filename.g (read file) (example file in GLP/g.g)
//    out filename.js: set output to be copyed to filename.js (write file) (example file in GLP/out.js)
//    ELSE:
//        1: TURN CHARACTERS INTO TOKENS
//        2: TURN TOKENS INTO SPLITTED ACTIONS (split by ;)
//        3: PRODUCE AN AST TURNING ACTIONS INTO ACTION OBJECTS
//        4: GENERATE JS CODE BASED ON THE AST 
//        5: ADD STANDARD LIBRARY TO THE CODE (modules/libraries/standard-library)
//        6: RETURN I/O FROM JS PROGRAM (handles both input and output at runtime)
// 3. GO TO STEP 1

const { IOS, prompt } = require("./modules/processes/IOS/IOS.js");
const welcomeMessage = require("./modules/welcome-message/welcome-message.js");
const lexer = require("./modules/processes/lexer/lexer.js");
const { splitTokens } = require("./modules/processes/splitter/splitTokens.js");
const parser = require("./modules/processes/parser/parser.js");
const generator = require("./modules/processes/generator/generator.js");
const stdlib = require("./modules/libraries/standard-library.js");
const fs = require("fs");

// CODE CLEANERS
function removeNewLines(inputString) {
  return inputString.replace(/[\n\r\t]/g, "");
}

function removeEmptyParentheses(inputString) {
  return inputString.replace(/\(\)/g, "");
}

// UNTIL USER UNBLANKS IT NO FILE OUTPUT (just console output)
let outputfilename = null;

const processInput = (input) => {
  if (input.trim().toLowerCase().startsWith("file")) {
    const filename = input.trim().split(" ")[1];
    const fileContent = fs.readFileSync(filename, "utf8");
    processInput(removeNewLines(fileContent));
  } else if (input.trim().toLowerCase().startsWith("out")) {
    const filename = input.trim().split(" ")[1];
    outputfilename = filename;
  } else {
    tokens = lexer.tokenize(removeNewLines(input));
    console.log("TOKENS:", tokens);

    splittedTokens = splitTokens(tokens);
    console.log("SPLITTED ACTIONS:", splittedTokens);

    const parsedASTs = splittedTokens.map((tokens) => parser.parse(tokens));
    console.log("AST:", JSON.stringify(parsedASTs, null, "\t"));

    let generatedCodes = parsedASTs.map((tokens) => generator.generate(tokens));
    let generatedCode = generatedCodes.join("; ") + ";";

    generatedCode = removeEmptyParentheses(generatedCode);
    console.log("GENERATED CODE:", generatedCode);

    generatedCodeWithLibrary = stdlib + generatedCode;
    console.log("GENERATED CODE WITH LIBRARY:\n", generatedCodeWithLibrary);

    if (outputfilename !== null) {
      fs.writeFileSync(outputfilename, generatedCodeWithLibrary);
    }
    try {
      console.error("I/O:");

      eval(generatedCodeWithLibrary);
    } catch (error) {
      console.error("Error while executing generated code:", error);
    }
  }
};

(async () => {
  try {
    console.log(welcomeMessage);

    while (true) {
      const input = await prompt("\x1b[33mGPL:~$\x1b[0m ");
      if (input.trim().toLowerCase() === "exit") break;

      await processInput(input);
    }
  } catch (error) {
    console.error("\x1b[31m%s\x1b[0m", error);
  } finally {
    IOS.close();
  }
})();

IOS.on("close", () => process.exit(0));
