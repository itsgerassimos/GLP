# GLANG GLP
![GLP](https://github.com/itsgerassimos/GLP/assets/136891956/ac6966f4-57eb-4b86-9ed6-b72671350a35)

GLP is an expandable interpreted functional general purpose programming language. 

## Features

- **Functional Programming**: GLANG GLP is function focused; everything is a function call or definition. Variables are considered constant functions which can be rewritten.
- **Expandable**: GLANG GLP is designed to be expandable, by allowing easy integration of JS functions. A primary example of this is the Standard Library file.
- **Recursive**: GLANG GLP supports recursion, allowing functions to call themselves.

## Getting Started

**Installation**: 

**Install Without Customization**: 
If you want to simply use the langauge without customization features you can download [GLP](https://github.com/itsgerassimos/GLP/tree/main/build) for your platform of choice (Win, Linux, Mac)

**Install With Customization(Recommended)**: 
If you want to customize the langauge as well langauge you may fork the project and run [GLP](https://github.com/itsgerassimos/GLP/tree/main/build) for your platform of choice (Win, Linux, Mac)

After installing, open the GLP command line and type commands:

**Example Usage**:

**PRINTING:**
```glp
(print Hello);
```
**`prints 'Hello'`**  



**COMPRARISON:**
```glp
(print (more 5 4))
```
**`prints 'true'`**  


**Hello GLP World:**
```glp
(makeFunction printABC (actions (print (a)) (print (b)) (print (c)))  a b c); (printABC Hello GPL World)
```

**`prints 'Hello`**  
**`GPL`**  
**`World'`**  



**Complex Example:**
```glp
(myvariable=10); (makeFunction sub (subtract (b) (a)) b a); (print (sub (myvariable) 2));
```
**`prints '8'`**  
(b) (a) have parenthesis because they refer to the function's args

## Basic Documentation:
Type functional commands in the form of:

```
(function-name (arg) ... (arg))
```

which calls function-name passing all following if any args/sub-functions: (arg) ... (arg)

**Important Functions:**

```
(makeFunction function-name (process) (arg) ... (arg)):
```

defines a function named function-name of process and args: (arg) ... (arg)

```
(add (arg) ... (arg)):
```

Adds two numbers with args: (arg) ... (arg)

```
(subtract (arg) ... (arg)):
```

Subtracts two numbers with args: (arg) ... (arg)

```
(multiply (arg)(arg)):
```

Multiplies two numbers

```
(divide (arg) (arg)):
```

Divides two numbers

```
(print (arg)):
```

Prints the value of arg

```
(ifelse (arg) ... (arg)):
```

Performs conditional branching where first arg is a condition and second an action: (arg)(arg)

```
(more (arg) (arg)):
```

Checks if the first argument is more than the second argument

```
(less (arg)(arg)):
```

Checks if the first argument is less than the second argument

```
(actions (arg) ... (arg)):
```

Consequently calls each (arg) function

**Special non-GLP Commands:**

- exit: terminates job.
- file: min.glp generates code for file to console
