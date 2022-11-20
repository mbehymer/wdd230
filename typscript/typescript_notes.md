## What is typescript
A programming language designed by Microsoft. to address shortcomings of JavaScript.

## Statically-typed language
We know the variable when we create it and compile it, it is the same type.

### What does it mean to compile?
Compiling means that after we finished writing our code, a compiler (a program) takes our code and looks at it, making sure it has been written acording the rules of the programming language we used (it checks for syntax errors).

Javascript but with type checking.
You cannot run code like this.
```JavaScript
let x = 12;
x = "12";
```
because this is would change the type

## Drawbacks
- It must be sent through a compiler because browsers do not recognize the code. This means there is an extra step between writing your code and viewing it.
- You must be a more disciplined programmer.

## Requirements
You need to install Node so that you can use npm to install the typescript compiler.

Windows:
```
npm i -g typescript
```

MAC/Linux:
```
sudo npm i -g typescript
```
`npm` is short for Node Package Manager for installing 
`i` is short for install
`-g` means you are installing it globally to access in all folders.

```
tsc -v
``` 
This will display the version