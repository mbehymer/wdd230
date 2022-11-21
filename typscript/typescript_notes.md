## What is typescript
A programming language designed by Microsoft. to address shortcomings of JavaScript. 
Released in Oct 2012

## Statically-typed language
We know the variable when we create it and compile it, it is the same type.

## Static Vs. Dynamic
### Static
- Protection from Runtime Errors:
This means that as you are programming TypeScript will let you know, and throw an error when you are doing things that would cause problems to your code. For example if we set a variable, age, to 12, and then we tried to change it to a string, age = age.toString();  and then tried to add 2 to age, TypeScript would throw an error because we tried to change the type of the variable age from a number to a string. In JavaScript this would run just fine but the output would be a string 122.

- IDE Assistance
This is really handy because it will give you the available functions for the type value you are working with.

- Performance Optimisation
Usually statically typed languages are lower level and will run faster because they are closer to the native machine code. TypeScript doesn't actually do that since it just compiles to JavaScript haha.

### Dynamic
- Less Boilerplate Code​
- Fast Start-up time​
- Generic programming is simpler



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
This will display the version of typescript that you are using