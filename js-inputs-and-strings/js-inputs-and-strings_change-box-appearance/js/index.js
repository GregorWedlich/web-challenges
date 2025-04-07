console.clear();
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener("input", (event) => {
  const color = event.target.value;
  console.log(color);

  const box = document.querySelector('[data-js="box"]');
  box.style.backgroundColor = `hsl(${color}, 100%, 50%)`;
});

inputRadius.addEventListener("input", (event) => {
  console.log(event.target);

  const radius = event.target.value;
  console.log(radius);

  const box = document.querySelector('[data-js="box"]');
  box.style.borderRadius = `${radius}px`;
});

inputRotation.addEventListener("input", (event) => {
  const rotation = event.target.value;

  const box = document.querySelector('[data-js="box"]');
  box.style.transform = `rotate(${rotation}deg)`;
});
