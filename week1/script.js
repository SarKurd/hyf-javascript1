/* 1 */

console.log("Hello, World!\nSlaw, Cihan\nHallo, Wereld");
/* END OF 1 */

/* 2 */

console.log('I\'m awesome');

/* END OF 2 */

/* 3 */
let x;
console.log("the value of x is: udefined");
console.log("the value of x is: " + x);
x =5;
console.log("the value of x is: 5")
console.log("the value of x is: " + x);

/* END OF 3 */

/* 4 */
let y;
console.log("the value of y will be: undefined");
console.log("the value of y is: " + y);
y = "Hello";
console.log("the value of y will be: Hello");
console.log("the value of y is: " + y);

/* END OF 4 */

/* 5 */

let z = 7.25;
console.log(z)
let a = Math.round(z);
console.log(a);
let c = Math.max(z, a);
console.log(c);

/* END OF 5 */

/* 6 */

let names = [];


console.log("The names will be empty");
console.log(names);
let myFavourateAnimals = ["Tiger", "Lion", "Cheetah", "Gazelle"];
console.log(myFavourateAnimals);
myFavourateAnimals.push("baby pig");
console.log(myFavourateAnimals);

/* END OF 6 */

/* 7 */

let myString = "this is a test";
console.log(myString.length);

/* END OF 7 */

/* 8 */

let foo = 10;
console.log("the value of foo is: " + foo);
let bar = "Hello";
console.log("the value of bar is: " + bar);
let quz = false;
console.log("the value of quz is: " + quz);
let corge = 3.14;
console.log("the value of corge is: " + corge);

console.log("foo is a Number\nbar is a String\nquz is Boolean\ncorge is a Number");
console.log("the type of foo is" + typeof(foo));
console.log("the type of bar is" + typeof(bar));
console.log("the type of quz is" + typeof(quz));
console.log("the type of corge is " + typeof(corge));

if(typeof(foo) === typeof(bar)){
    console.log("foo and bar are same type");
} else{
    console.log("foo and bar are different types");
}
if(typeof(corge) === typeof(quz)){
    console.log("quz and corge are same type");
} else{
    console.log("quz and corge are different types");
}

/* END OF 8 */

/* 9 */

console.log("x will be 1");
console.log(5 % 2) // return 1
console.log(9.6 % 5) //return 4.6
let x = "Hello";
let y = "World";
console.log( x % y ) //NaN, % is used with only numbers

/* END OF 9 */

/* 10 */

console.log("Yes");
let baa = ["Apple", true, 25, 9.99];
console.log(baa);

console.log("Javascript can comapre them because the result of a division by 0 is a number ¯\\_(ツ)_/¯ ");
let g= 6/0;
let h= 10/0;
if(g === h)
{ 
    console.log("They are equal");
} else{
    console.log("nah. they are different")
}

/* END OF 10 */