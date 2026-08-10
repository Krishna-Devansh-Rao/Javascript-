// Javascript uses 

// REPL -> Read - evaluate - print - Loop

// clear -> cmd + k ;

//Variable
// a = 5;
// b = 6;

//Data types 
// num 
// bool
// string
// undefined
// null
// Bignt
// symbol

// //operator
// +,-,*,/,%

// //operator Precedence
// () , ** , * , / , % , + , -

//Let keyword
// let num = 2;  //tho 2 ka jo num as var hogaya hai ;

// //const keyword
// const yr = 2025; //yeh fixed hogaya and change nahi ho skata 

// //Console.log()
// Console.log("This is used to print any statement like Hello World");

// If/else
// let age = 18;
// if(age >=19 ){
//     console.log("They can ride");
// }else{
//     console.log("They cann't ride");
    
// }

// //conditional
// let firstname = "Krishna" ;
// let Secondname = "Devansh" ;
// let thirdname = "Rao" ;
// let course = "BCA";

// console.log(`Hello I am ${firstname} ${Secondname} ${thirdname} and i am pursuing ${course}`);


//Practise ques
// let S = 50;
// let M = 100;
// let L = 200;
// let XL = 250;
// let size = L;

// if (size === S) {
//     console.log(`The Price of Small is ${S}`);
// }
// else if (size === M) {
//     console.log(`The Price of Medium is ${M}`);
// }
// else if (size === L) {
//     console.log(`The Price of Large is ${L}`);
// }
// else if (size === XL) {
//     console.log(`The Price of Extra-Large is ${XL}`);
// }
// else {
//     console.log("Invalid Price");
// }

// let num =12;

// if(num%3 ==0 && num+1 == 15 | num-1 == 11){
//     console.log("Safe")
// }
// else{
//     console.log("UnSafe")
    
// }

// Switchcase

// let day =8;

// switch (day) {
//     case 1:
//         console.log("First day of week i.e Monday ")
//         break;
//     case 2:
//         console.log("Second day of week i.e Tue ")
//         break;
//     case 3:
//         console.log("Third day of week i.e Wed ")
//         break;
//     case 4:
//         console.log("fourth day of week i.e Thus ")
//         break;
//     case 5:
//         console.log("fifth day of week i.e Fri ")
//         break;
//     case 6:
//         console.log("Sixth day of week i.e Sat ")
//         break;
//     case 7:
//         console.log("seventh day of week i.e Sunday ")
//         break;
//     case 8:
//         console.log("Day doesn't exist");
//     default:
//         break;
// }

// Alert
// alert("Krishna is working");
// alert("Do not disturb him");



// let name = "   Krishna  ";

// name.method(K);


// text.length
// text.toUpperCase()
// text.toLowerCase()
// text.includes("Krishna")
// text.startsWith("Hello")
// text.endsWith("Krishna")
// text.trim()
// text.slice(0, 5)

// let text = "Hello Krishna";

// let slice = text.slice(0,6);

// let br = text.replace("Hello","YO")

// console.log(slice);
// console.log(br);


// let text = "I love JavaScript";

// let result = text.replace("JavaScript", "Python");

// console.log(text);
// console.log(result);


// let str = "Mango";

// let re = str.repeat(3);

// console.log(re);

// let msg = "Help!";


// console.log(msg.trim().toUpperCase());


// let car = ["BMW","Ferrari","Lambo"];

// let newcar = car.push("ROlls Royce");

// console.log(car)
// console.log(newcar)

// let followers = ["a","b","c"];

// let blocked = followers.shift();

// let unblocked = followers.unshift("ef");
// console.log(blocked);
// console.log(unblocked);


let primary = ["red","blue","Green"];

let secondry = ["yellow","orange","voilet"];

let a = primary.concat(secondry);

let b = secondry.concat(primary);

console.log(a);
console.log(b);

let c = a.reverse();
console.log(c);
