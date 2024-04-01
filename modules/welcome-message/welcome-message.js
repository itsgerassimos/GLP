const welcomeMessage = `
MADE BY GERASSIMOS MOUTAFIS. COPYRIGHT © GERASSIMOS MOUTAGIS 2024
\x1b[35m
    ░▒▓██████▓▒░░▒▓█▓▒░      ░▒▓███████▓▒░  
    ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
    ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
    ░▒▓█▓▒▒▓███▓▒░▒▓█▓▒░      ░▒▓███████▓▒░  
    ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░        
    ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░        
     ░▒▓██████▓▒░░▒▓████████▓▒░▒▓█▓▒░        
\x1b[0m

\x1b[36mWelcome to GLP!\x1b[0m

Type functional commands in the form of:
\t(\x1b[35mfunction-name\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m)
\twhich calls \x1b[35mfunction-name\x1b[0m passing all following if any args/sub-functions: \x1b[34m(arg) ... (arg)\x1b[0m

\x1b[36mImportant Functions:\x1b[0m
    \t(\x1b[92mmakeFunction\x1b[0m \x1b[35mfunction-name\x1b[0m (\x1b[90mprocess\x1b[0m) \x1b[34m(arg) ... (arg)\x1b[0m):
    \tdefines a function named \x1b[35mfunction-name\x1b[0m of \x1b[90mprocess\x1b[0m and args: \x1b[34m(arg) ... (arg)\x1b[0m

    (\x1b[92madd\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m):
    Adds two numbers with args: \x1b[34m(arg) ... (arg)\x1b[0m

    (\x1b[92msubtract\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m):
    Subtracts two numbers with args: \x1b[34m(arg) ... (arg)\x1b[0m

    (\x1b[92mmultiply\x1b[0m \x1b[34m(arg)(arg)\x1b[0m):
    Multiplies two numbers

    (\x1b[92mdivide\x1b[0m \x1b[34m(arg) (arg)\x1b[0m):
    Divides two numbers

    (\x1b[92mprint\x1b[0m \x1b[34m(arg)\x1b[0m):
    Prints the value of arg

    (\x1b[92mifelse\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m):
    Performs conditional branching where first arg is a condition and second an action: \x1b[34m(arg)(arg)\x1b[0m

    (\x1b[92mmore\x1b[0m \x1b[34m(arg) (arg)\x1b[0m):
    Checks if the first argument is more than the second argument

    (\x1b[92mless\x1b[0m \x1b[34m(arg)(arg)\x1b[0m):
    Checks if the first argument is less than the second argument
    
    (\x1b[92mactions\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m):
    Consequently calls each (arg) function


\x1b[36mSpecial non-GLP Commands:\x1b[0m
    \t\x1b[36mexit\x1b[0m: terminates job.
    \t\x1b[36mfile\x1b[0m: min.glp generates code for \x1b[36mfile\x1b[0m to console
`;

module.exports = welcomeMessage;
