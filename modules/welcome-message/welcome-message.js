const welcomeMessage = `
MADE BY GERASSIMOS MOUTAFIS. COPYRIGHT © GERASSIMOS MOUTAFIS 2024
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
        (\x1b[35mfunction-name\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m)
        which calls \x1b[35mfunction-name\x1b[0m passing all following if any args/sub-functions: \x1b[34m(arg) ... (arg)\x1b[0m

\x1b[36mImportant Functions:\x1b[0m
        (\x1b[92mmakeFunction\x1b[0m \x1b[35mfunction-name\x1b[0m (\x1b[90mbody\x1b[0m) (\x1b[90mreturn\x1b[0m) \x1b[34m(arg) ... (arg)\x1b[0m):
        defines a function named \x1b[35mfunction-name\x1b[0m of \x1b[90mprocess\x1b[0m returning \x1b[90m(return)\x1b[0m and 
        with args: \x1b[34m(arg) ... (arg)\x1b[0m

        (\x1b[92mcreate\x1b[0m \x1b[35mvariableName)\x1b[0m :
                creates a variable named \x1b[35mvariableName\x1b[0m
        (\x1b[92mcreate\x1b[0m \x1b[35mvariableName\x1b[0m \x1b[34m(arg)\x1b[0m):
                creates and initializes variable named \x1b[35mvariableName\x1b[0m with \x1b[34m(arg)\x1b[0m) value
        (\x1b[92mset\x1b[0m \x1b[35mvariableName\x1b[0m \x1b[34m(arg)\x1b[0m):
                initializes variable \x1b[35mvariableName\x1b[0m with \x1b[34m(arg)\x1b[0m) value
        
        (\x1b[92madd\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m):
        Adds two numbers with args: \x1b[34m(arg) ... (arg)\x1b[0m

        (\x1b[92msubtract\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m):
        Subtracts two numbers with args: \x1b[34m(arg) ... (arg)\x1b[0m

        (\x1b[92mmultiply\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m):
        Multiplies two numbers

        (\x1b[92mdivide\x1b[0m \x1b[34m(arg) (arg)\x1b[0m):
        Divides two numbers

        (\x1b[92mexp\x1b[0m \x1b[34m(arg) (arg)\x1b[0m):
        Returns exp: \x1b[0m\x1b[34m(arg)\x1b[0m^\x1b[0m\x1b[34m(arg)\x1b[0m

        (\x1b[92mprint\x1b[0m \x1b[34m(arg)\x1b[0m):
        Prints the value of \x1b[34m(arg)\x1b[0m

        (\x1b[92minput\x1b[0m \x1b[34m(arg)\x1b[0m):
        Returns value of \x1b[34m(arg)\x1b[0m after it being typed by user

        (\x1b[92mif\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m):
        (\x1b[92mifelse\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m):
        Performs conditional branching where first \x1b[0m\x1b[34m(arg)\x1b[0m is a condition, 
        second an action third is alternative action: \x1b[34m(arg)(arg)\x1b[0m
        Both \x1b[92mif\x1b[0m and \x1b[92mifelse\x1b[0m do the same but distinction is recommended for semantic purposes.

        (\x1b[92mmore\x1b[0m \x1b[34m(arg) (arg)\x1b[0m):
        Checks if the first \x1b[0m\x1b[34m(arg)\x1b[0m is more than the second \x1b[0m\x1b[34m(arg)\x1b[0m

        (\x1b[92mless\x1b[0m \x1b[34m(arg)(arg)\x1b[0m):
        Checks if the first \x1b[0m\x1b[34m(arg)\x1b[0m is less than the second \x1b[0m\x1b[34m(arg)\x1b[0m
        
        (\x1b[92mactions\x1b[0m \x1b[34m(arg) ... (arg)\x1b[0m):
        Consequently calls each \x1b[0m\x1b[34m(arg)\x1b[0m function

        (\x1b[92mfor\x1b[0m \x1b[35m(arg)\x1b[0m (\x1b[90marg\x1b[0m) \x1b[34m(condition)\x1b[0m (arg)):
                runs a for loop for variable \x1b[35m(arg)\x1b[0m of initial value (\x1b[90marg\x1b[0m) when \x1b[34m(condition)\x1b[0m executing (arg)

        (\x1b[92mwhile\x1b[0m \x1b[34m(condition)\x1b[0m (arg)):
                runs a while loop when \x1b[34m(condition)\x1b[0m executing (arg)

\x1b[36mSpecial non-GLP Commands:\x1b[0m
        \x1b[36mexit\x1b[0m: terminates job.
        \x1b[36mfile\x1b[0m: \x1b[35minputfilename.glp\x1b[0m generates code for \x1b[35minputfilename.glp\x1b[0m to console
        
        For more documentation visit \x1b[0m \x1b[35mhttps://github.com/itsgerassimos/GLP/\x1b[0m  
`;

module.exports = welcomeMessage;
