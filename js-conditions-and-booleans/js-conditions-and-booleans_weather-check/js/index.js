// Change this value to test different "weather" conditions.
// const weather = "sunny";
// switch (weather) {
//   case "rainy":
//     console.log(`The weather is ${weather}`);
//     break;
//   case "snowy":
//     console.log(`The weather is ${weather}`);
//     break;
//   case "sunny":
//     console.log(`The weather is ${weather}`);
//     break;
//   default:
//     console.log("I'm not sure what the weather is like.");
// }

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const weather = "sunny";
const temperature = 21;

switch (true) {
  case weather === "sunny" && temperature > 20:
    console.log(`The is sunny and warm!`);
    break;
  case weather === "rainy" && temperature < 20:
    console.log(`It's raining, don't forget your umbrella!`);
    break;
  case weather === "snowy" && temperature <= 0:
    console.log(`Freezing snow!`);
    break;
  default:
    console.log("I'm not sure what the weather is like.");
}
