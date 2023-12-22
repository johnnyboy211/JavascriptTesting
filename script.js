// showing text on the console

console.log("This is the console screen.");

// declaring variables

firstname = "Jonathan";
console.log(firstname);

lastname = "Mathew";
console.log(lastname);

// joing strings

fullname = firstname.concat(lastname);
console.log(fullname);

// finding the length of strings

nol = fullname.length;
console.log(nol);

// replacing strings

word1 = "hd";
word2 = word1.replace("d", "i");
console.log(word2);

sentence1 = "The birds are swimming.";
sentence2 = sentence1.replace("birds", "fishes");
console.log(sentence2);

// changing caps

lower = "apple";
upper = lower.toUpperCase();
console.log(upper);

big = "APPLE";
small = big.toLowerCase();
console.log(lower);

// maths functions

max = Math.max(366231, -700859, 30402, 991610);
console.log(max);

min = Math.min(366231, -700859, 30402, 991610);
console.log(min);

// basic maths operations

const number1 = 12;
const number2 = 9;
console.log("Number 1 is " + number1 + " and Number 2 is " + number2 + ".");

const add = number1 + number2;
console.log(number1 + " + " + number2 + " = " + add);

const sub = number1 - number2;
console.log(number1 + " - " + number2 + " = " + sub);

const mult = number1 * number2;
console.log(number1 + " x " + number2 + " = " + mult);

const divi = number1 / number2;
console.log(number1 + " ÷ " + number2 + " = " + divi)
