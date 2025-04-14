console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log("Data: " + data);
  console.log(data.results[0].name); // Luke Skywalker
  console.log(data.results[1].name); // C-3PO
  console.log(
    `The eye color of ${data.results[2].name} is ${data.results[2].eye_color}`
  ); // The eye color of R2-D2 is red

  // Create an array and itterate
  Object.entries(data).map(([key, value]) => {
    console.log(key, value);
  });
}

fetchData();
