console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
  const inputValue = firstInput.value;
  const upperCaseValue = inputValue.toUpperCase();

  firstInput.value = upperCaseValue;
  console.log(upperCaseValue);
});
