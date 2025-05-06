export function getAnimal(animalName) {
  if (animalName === undefined) {
    return "I do not like animals at all!";
  }

  if (animalName === "cats") {
    return "I totally love cats!";
  }

  return `I like ${animalName}!`;
}
