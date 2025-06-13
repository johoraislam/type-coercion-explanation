/*When we don't set a value ourselves and want to take input from the user, we use prompt().
 prompt() is a type of function.*/


 let age = prompt('What is your age')
 console.log(age)
 console.log(typeof age) //string

 /*prompt() always returns a string, even if the user types a number.

So, if you want to use the value as a number, you need to convert it manually.like....*/

let getingNumber = Number(age)
console.log(getingNumber)
// Now it has become a number.

// Or, you can write it like this as well.

// let age = Number(prompt('What is your age'))

// Now it will become a number.
