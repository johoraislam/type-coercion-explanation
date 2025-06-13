// We think of a variable as a box where we can store any data we need.”

let a = 10;
let b = 20;
let c = a;   // c now gets the value from a, so c holds 10

console.log(c);  // 10

a = b;         // a now gets the value from b, so a holds 20
console.log(a);  // 20

b = c;         // b now gets the value from c, so b holds 10
console.log(b);  // 10

// Explanation:
// When you write let c = a;, a new variable c is created, and the value of a (which is 10) is copied into c.

// At this point, a and c are separate “boxes” holding their own values independently.

// Changing a or b afterwards does not affect c, because c has its own copy of the original value.

// When you assign a = b;, the value of b (20) is copied into a.

// Then, assigning b = c; copies the value of c (10) into b.

// Key point:
// This is called copy by value — variables hold their own copies of data. So updating one variable does not change the others.



let d = 10;
let f = 20;

console.log('Before swap:', d, f);

d = d + f;  // d এখন 30
f = d - f;  // f = 30 - 20 = 10
d = d - f;  // d = 30 - 10 = 20

console.log('After swap:', d, f);


let g = 30;
let h = 50;

console.log('Before swap:', g, h);

[g, h] = [h, g];  //  Swapping two variables using destructuring in one line.

console.log('After swap:', g, h);
