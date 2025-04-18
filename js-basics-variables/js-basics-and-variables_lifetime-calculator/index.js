console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.
const daysInYear = 365;
const averageLifeSpan = 80;
const hoursInDay = 24;
const sleepHoursPerDay = 8;

// 1
const totalDaysLived = currentAge * daysInYear;

// 2
const estimatedRemainingDays = (averageLifeSpan - currentAge) * daysInYear;

// 3
const percentageOfLifeLived = (currentAge / averageLifeSpan) * 100;

// 4
const sleepDays = (sleepHoursPerDay / hoursInDay) * daysInYear * currentAge;

console.log("Total days lived: " + totalDaysLived);
console.log("Estimated remaining days: " + estimatedRemainingDays);
console.log("Percentage of life lived: " + percentageOfLifeLived + "%");
console.log("Total days spent sleeping: " + sleepDays);

console.log("Current age is: " + currentAge);
