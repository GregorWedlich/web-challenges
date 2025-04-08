console.clear();

const form = document.querySelector('[data-js="form"]');
const firstNameInput = form.querySelector('input[name="firstName"]');

firstNameInput.focus();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  // Bonus
  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      Number(data.age) + Number(data.badness)
    }`
  );

  form.reset();
  firstNameInput.focus();
});
