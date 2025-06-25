// ............... Pre-Increment Examples ................
// ++a → Pre-increment: Value increases first, then it is used.

// ------------------------
// 🎂 Example 1: Birthday - Age increases
let age = 24;
let newAge = ++age;

console.log("Updated age:", newAge); // Output: 25
// Meaning: Age was increased before it was assigned to newAge.

// ------------------------
// ✔️ Example 2: Task Completion Counter
let tasksDone = 4;

if (++tasksDone === 5) {
    console.log("You’ve completed 5 tasks! ✅");
}
// Meaning: tasksDone became 5 before the comparison.

// ------------------------
// 🎮 Example 3: Game Score Level Up
let score = 9;
let level = ++score;

console.log("Your new level:", level); // Output: 10
// Meaning: Score increased first, then used as level.

// ------------------------
// 🧾 Example 4: Queue Number System
let queueNumber = 99;
let yourNumber = ++queueNumber;

console.log("Your queue number is:", yourNumber); // Output: 100
// Meaning: Number increased first, then given to you.

// ------------------------
// ❤️ Example 5: Social Media Like Counter
let likes = 199;
let updatedLikes = ++likes;

console.log("Total likes now:", updatedLikes); // Output: 200
// Meaning: Like added first, then shown.






// ............... Post-Increment Examples ................
// a++ → Post-increment: Value is used first, then it increases.

// ------------------------
// 🎂 Example 1: Birthday Greeting Before Age Update
let age2 = 24;
let messageAge = age++;

console.log("Displayed age:", messageAge); // Output: 24
console.log("Actual age now:", age2);       // Output: 25
// Meaning: First used age (24), then increased it to 25.

// ------------------------ 
// 📄 Example 2: Print Before Page Number Increases
let currentPage = 9;
let printedPage = currentPage++;

console.log("Printed page:", printedPage);     // Output: 9
console.log("Next page number:", currentPage); // Output: 10
// Meaning: Printed first, then moved to next page.

// ------------------------
// 🛒 Example 3: Cart Item Count - Show First, Then Add
let cartItems = 2;
let beforeAdd = cartItems++;

console.log("Cart before add:", beforeAdd); // Output: 2
console.log("Cart after add:", cartItems);  // Output: 3
// Meaning: Displayed item count before adding one.

// ------------------------
// 🎮 Example 4: Game Lives Left (used, then reduced)
let lives = 3;
let usedLife = lives++;

console.log("Lives shown to user:", usedLife); // Output: 3
console.log("Actual lives now:", lives);       // Output: 4
// (In this case, increasing lives – could be power-up instead)

// ------------------------
// ☕ Example 5: Free Coffee Points
let points = 9;
let beforeReward = points++;

console.log("Points shown:", beforeReward); // Output: 9
console.log("Points now:", points);         // Output: 10
// Meaning: Showed points first, then rewarded 1 extra point.

console.log(Math.cbrt(125))