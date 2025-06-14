//..............Logical Operator................

// ✅ AND Operator
// The && (AND) operator returns true only if both conditions are true.

// If either one is false, the result is false.

true && true     // true ✅
true && false    // false ❌
false && true    // false ❌
false && false   // false ❌

// Lets example......

// 🔹 Real-life Example 1
true && true     // true ✅

const age = 25;
const salary = 25000;

if(age===25 && salary===25000){
    console.log('true') //output 'true'
}else{console.log('false')}


// 🔹 Real-life Example 2
true && false    // false ❌

const isHonest = true;
const isStudent = false;

if(isHonest && isStudent){
    console.log('You are a student and good person')
}
else{console.log('You are a great person')} // output 'You are a great person'



// ✅|| → OR operator
// The || (OR) operator returns true if at least one of the conditions is true.

// It returns false only if both conditions are false.

true || true     // true ✅
true || false    // true ✅
false || true    // true ✅
false || false   // false ❌


// 🔹 Real-life Example 1
false || true    // true ✅

const isStudent2 = false;
const isSeniorCitizen = true;

if (isStudent2 || isSeniorCitizen) {
    console.log("You get a discount! 🎉"); //output 'You get a discount! 🎉'
} else {
    console.log("Regular price applies.");
}

// 🔹 Real-life Example 1
true || false    // true ✅

const hadCoffee = true;
const sleptWell = false;

if (sleptWell || hadCoffee) {
    console.log("You can start your day strong! ☀️"); 
    //output 'You can start your day strong! ☀️'
} else {
    console.log("Take it slow today.");
}

