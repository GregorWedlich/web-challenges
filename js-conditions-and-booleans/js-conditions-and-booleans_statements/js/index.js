console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "h4x0r1337";
const username = "Brunhilde1984";

if (receivedPassword !== SUPER_SECRET_PASSWORD) {
  console.log(`Access denied!`);
} else {
  console.log(`Welcome! You are logged in as ${username}.`);
}

// Part 2: Even / Odd
const number = 5;
if (number % 2 === 0) {
  console.log(`${number} is even.`);
} else {
  console.log(`${number} is odd.`);
}

// Part 3: Hotdogs
const numberOfHotdogs = 4000000000;
if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.50 euro per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1_000_000) {
  console.log("1 euro per hotdog");
} else {
  console.log("0.50 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Sam";

const greeting = "Hello " + (userName === "Sam" ? "Coach" : userName) + "!";

console.log(greeting);
