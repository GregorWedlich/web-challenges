console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
for (const language in languages) {
  const option = document.createElement("option");
  console.log(option);

  option.value = language;
  option.textContent = languages[language];
  select.append(option);
}
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--
// For komplex navigations we need more nestetd loops and checks like typeof === "object"...
// We can do it statically like this:
for (const navItem in nav) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = nav[navItem].href; // asign href to the a element
  a.textContent = nav[navItem].text; // asign text to the a element
  li.append(a);
  ul.append(li);
}

// --^-- write or modify code above this line --^--
