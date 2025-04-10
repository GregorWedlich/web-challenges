console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (let programmingLanguage of programmingLanguages) {
  const li = document.createElement("li");
  li.innerText = programmingLanguage;
  ol.append(li);
}

// --^-- write or modify code above this line --^--
