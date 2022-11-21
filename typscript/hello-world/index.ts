//primitive types number, string, boolean

let age: number = 30;//The colon is used to describe the type of variable

//age = "string"; //If you try to set age to a string, you will see that there is an error 
                  //and that it will display an error in the terminal when you try to compile it.


let a = "some string";

// a = false;

let b = false;

// b = 2;


let arr: number[] = [1,2,3];

// arr.push("four");

let otherArr: (string | number)[] = [1, "two", "three", 4, 5, 6]

// otherArr.push(false);

function myFunc(y: number): (number | string) {

    return y

    // return y.toString()

    // return y === 2;
}

// myFunc = "something";

let inf = 1/0;

console.log(inf);

