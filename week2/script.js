/* STRINGS */

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let newString = myString.replace(/,/g, " ");
console.log(newString);

/* END OF STRINGS */

/* ARRAYS */
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);
console.log("The length of the Array is 5 ");
console.log("The Array has a length of :" + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals); 

for(let i = 0; i < favoriteAnimals.length; i++){
    let indx = favoriteAnimals.indexOf("meerkat"); //find the index of the item
    if(indx !== -1){
        console.log("The item you are looking for is at index of: " + indx);
        break; //Since there is only one meerkat
    }
}
/* END OF ARRAYS */

/* MORE JAVASCRIPT */

// 1
function sumOfThree(num1, num2, num3){
    return num1 + num2 + num3;
}

//2
function colorCar(color){
    return "a " + color + " car";
}

console.log(colorCar("green"));

//3

let person = { name: "Sarbast", age: 25, favColor: "black"};

function personInfo(obj){
    return "Name: " + obj.name + "\n" + "Age: " + obj.age;
}

console.log(personInfo(person));

//4
function vehicleType(color, code){
    if(code === 1){
        return "A " + color + " car";
    }
    else if (code === 2){
        return "A " + color + " motorbike";
    }
    else{
        return "wrong vehicle code";
    }
}

console.log(vehicleType("blue", 1));

//5

3===3?console.log("true"):console.log("false");

//6

function vehicle(color, code, age){
    if(code === 1){
        if(age > 1){
            return "A " + color + " used car";
        } else if( age === 1 ){
            return "A " + color + " new car";
        } else{
            return "wrong age number"
        }
    }
    else if (code === 2){
        if(age > 1){
            return "A " + color + " used motorbike";
        } else if( age === 1 ){
            return "A " + color + " new motorbike";
        } else{
            return "wrong age number"
        }
    } else{
        return "wrong vehicle code";
    }
}

console.log(vehicle("blue", 2, 5));

//7

let listOfVehicles = [ "motorbike", "caravan", "bike", "car"];

//8

console.log(listOfVehicles[2]);

//9


function vehicleTemp(color, code, age){
    
    if(age > 1){
        return "A " + color + " used " + listOfVehicles[code + 1];
    } 
    else if( age === 1 ){
            return "A " + color + " new " + listOfVehicles[code + 1];
    } else{
            return "wrong age number"
    }
}

console.log(vehicleTemp("blue", 2, 1));


//10
function writeVehicleadvert(){

    let prefixString = "Amazing Joe's Garage, we service "

    for(let i = 0; i < listOfVehicles.length; i++){

        if(i === listOfVehicles.length -1){ // the last item
            prefixString = prefixString + " and " + listOfVehicles[i] + ".";
        } else if (i === listOfVehicles.length -2){ //before the last item
            prefixString += listOfVehicles[i];
        }else{ //any other items
            prefixString = prefixString + listOfVehicles[i] + ", ";
        }
    }

    return prefixString;
}

console.log(writeVehicleadvert());

//11
listOfVehicles.push("van");
console.log(writeVehicleadvert());

//12

let emptyObj = {};

//13

let myhyfTeachers = {HTML_CSS: "The German Guy(forgot the name :-D and Dine",
 commandLine: "Unmesh" , git: "sorry forgot her name :(" , javascript: "Mauro", assitances: "Hardet and (idk his name :(" };

 //14

 myhyfTeachers.languages = "HTML CSS and Javascript"

 console.log(myhyfTeachers.languages);


 //15

 // x and y have same properties of an Object since Arrays are objects too
 // x and y have different references so they can't be equal even with (==) operator 
 let x = [1,2,3];
 let y = [1,2,3];


 if(x == y){ // false
    console.log("x is equals y");
 }

 if(x === y){ //false
    console.log("x is strictly equals y");
 }

// z now has same refrence as y so they are equal but still different than x
let z = y;

 if(z == x){ // false
    console.log("z is equals x");
 }

 if(z === x){ // false
    console.log("z is strictly equals x");
 }

 if(z === y){ //true
    console.log("z is strictly equals y");
 }

 if(z == y){ //true
    console.log("z is equals y");
 }

 //assigning new vale to z will change the reference so z and y now are different
 z = [4, 5, 6];
 if(z === y){ //false
    console.log("new assigned z is strictly equals y");
 }

 if(z == y){ //false
    console.log("new assigned z is equals y");
 }

 //16

let o1 = { foo: 'bar' }; 
let o2 = { foo: 'bar' };
let o3 = o2; //o3 and o2 has same reference

console.log("o2 foo:" + o2.foo);
console.log("o3 foo:" + o3.foo);

//modifying o2 will also modify o3, vice versa

o2.foo = "baz";

console.log("o2 foo after modify:" + o2.foo);
console.log("o3 foo after modify:" + o3.foo);

//But assigning objects will change the reference

o2 = {corge: 'qux'};

if(o2  === o3){
    console.log("o2 equals o3 after assigning");
}

/* I believe it's important because when you(o2 = o3) then o2 will
 have same refernece as of o3 but (o3 = o2) o3 will have same reference as o2 */

let oA = { foo: 'bar' }; 
let oB = { foo: 'bar' };

/*
let oB = oC // you can't define oB again
*/

let oC;
 oB = oC;

//console.log(oB.foo); //must return undefined

//17

let bar = 42; 
typeof typeof bar; //the return of typeof is a string so the typeof of typeof must be a string

// END