# JavaScript Notes (Till `if...else`)

# 1. What is JavaScript?

JavaScript is a programming language used to make websites interactive.

### Roles of Web Technologies

* **HTML** → Structure
* **CSS** → Styling
* **JavaScript** → Functionality & Interactivity

### Examples

* Login Form
* Calculator
* Dark Mode
* Shopping Cart
* Form Validation
* Games
* Dynamic Content

---

# 2. Output in JavaScript

The `console.log()` function is used to print output in the browser console.

```javascript
console.log("Hello World");
console.log(100);
console.log(true);
```

Output:

```
Hello World
100
true
```

---

# 3. Variables

A variable is a named container used to store data.

## Syntax

```javascript
let name = "Krishna";
const country = "India";
var age = 19;
```

### `let`

* Value can be changed.
* Preferred for values that change.

```javascript
let score = 10;
score = 20;
```

### `const`

* Value cannot be reassigned.
* Preferred for fixed values.

```javascript
const pi = 3.14;
```

Trying to change it:

```javascript
const pi = 3.14;
pi = 5;
```

Results in:

```
TypeError: Assignment to constant variable.
```

### `var`

* Older way of declaring variables.
* Avoid in modern JavaScript unless required.

---

# 4. Naming Rules

✅ Valid

```javascript
let firstName;
let userAge;
let total_marks;
let $price;
let _name;
```

❌ Invalid

```javascript
let 1name;
let let;
let user-name;
```

---

# 5. Data Types

JavaScript has different types of data.

## String

Text enclosed in quotes.

```javascript
let name = "Krishna";
```

## Number

Integers or decimal values.

```javascript
let age = 19;
let price = 99.99;
```

## Boolean

Only two values.

```javascript
true
false
```

Example:

```javascript
let isLoggedIn = true;
```

## Undefined

A variable declared but not assigned a value.

```javascript
let x;
```

## Null

Represents an intentional empty value.

```javascript
let data = null;
```

---

# 6. `typeof` Operator

Used to check the data type.

```javascript
console.log(typeof "Hello");
```

Output

```
string
```

Examples

```javascript
typeof "Krishna"    // string
typeof 19           // number
typeof true         // boolean
typeof undefined    // undefined
typeof null         // object (JavaScript's historical bug)
```

---

# 7. Difference Between Number and String

```javascript
19
```

* Number

```javascript
"19"
```

* String

Quotes determine whether a value is a string.

---

# 8. Operators

## Arithmetic Operators

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Remainder      |
| `**`     | Power          |

Example

```javascript
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

---

## Assignment Operators

| Operator | Example  |
| -------- | -------- |
| `=`      | `x = 10` |
| `+=`     | `x += 5` |
| `-=`     | `x -= 2` |
| `*=`     | `x *= 3` |
| `/=`     | `x /= 2` |

Example

```javascript
let x = 10;

x += 5;

console.log(x);
```

Output

```
15
```

---

## Comparison Operators

These return either `true` or `false`.

| Operator | Meaning               |
| -------- | --------------------- |
| `>`      | Greater Than          |
| `<`      | Less Than             |
| `>=`     | Greater Than or Equal |
| `<=`     | Less Than or Equal    |
| `==`     | Loose Equality        |
| `===`    | Strict Equality       |
| `!=`     | Not Equal             |
| `!==`    | Strict Not Equal      |

### `==`

Compares only the value.

```javascript
5 == "5"
```

Output

```
true
```

### `===`

Compares both value and data type.

```javascript
5 === "5"
```

Output

```
false
```

**Best Practice:** Always prefer `===`.

---

## Logical Operators

### AND (`&&`)

Both conditions must be true.

```javascript
true && true
```

Result

```
true
```

### OR (`||`)

At least one condition must be true.

```javascript
true || false
```

Result

```
true
```

### NOT (`!`)

Reverses a boolean value.

```javascript
!true
```

Result

```
false
```

---

# 9. Decision Making

## `if`

Executes code only when the condition is true.

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

---

## `if...else`

Executes one block if true and another if false.

```javascript
let age = 15;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

## `else if`

Checks multiple conditions.

```javascript
let marks = 82;

if (marks >= 90) {
    console.log("A");
}
else if (marks >= 75) {
    console.log("B");
}
else if (marks >= 50) {
    console.log("C");
}
else {
    console.log("Fail");
}
```

---

## Nested `if`

An `if` inside another `if`.

```javascript
let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    }
}
```

---

# 10. Best Practices

* Use `let` for values that change.
* Use `const` by default for fixed values.
* Avoid `var` in modern JavaScript.
* Use `===` instead of `==`.
* Give meaningful variable names.
* Keep your code properly indented.
* Predict the output before running your code.
* Practice by writing small programs daily.

---

# Quick Revision

* ✅ JavaScript adds functionality to websites.
* ✅ `console.log()` prints output.
* ✅ Variables store data.
* ✅ `let` → changeable, `const` → fixed, `var` → old.
* ✅ Main data types: String, Number, Boolean, Undefined, Null.
* ✅ `typeof` checks data types.
* ✅ Operators perform calculations, comparisons, and logical operations.
* ✅ `===` compares both value and type.
* ✅ `if`, `else`, and `else if` allow decision making.


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
