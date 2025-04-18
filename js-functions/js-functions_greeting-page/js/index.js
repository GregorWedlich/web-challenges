console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const currentTime = new Date().getHours();

  // Or with a switch, more ways to the goal
  if (currentTime >= 6 && currentTime <= 12) {
    return "Good Morning";
  }
  if (currentTime >= 13 && currentTime <= 18) {
    return "Good Afternoon";
  }
  if (currentTime >= 19 && currentTime <= 22) {
    return "Good Evening";
  }
  if (currentTime >= 23 && currentTime <= 5) {
    return "Good Night";
  }
}

function getDayColor() {
  // Code here
  const getDay = new Date().getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  switch (weekDays[getDay]) {
    case "Monday":
      return "darkgray";
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "lightblue";
    case "Saturday":
    case "Sunday":
      return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
