console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

// Bonus
const successDiv = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

//bonus
function hideSuccess() {
  successDiv.setAttribute("hidden", "");
}

function showSuccess() {
  successDiv.removeAttribute("hidden");
}

hideTosError(); // hide error initial
hideSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    showTosError();
    hideSuccess(); // bonus
    return; // Stop if tos is not accepted
  }

  hideTosError(); // After checked and submited error hide
  showSuccess();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  // alert("Form submitted");
});

// Hide error when is checked
tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
