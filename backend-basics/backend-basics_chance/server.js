import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

const randomPerson = () => {
  return {
    name: chance.name(),
    age: chance.age(),
    profession: chance.profession(),
  };
};

export const server = createServer((req, res) => {
  res.statusCode = 200;
  res.end(
    `Hello, my name is ${randomPerson().name} and I am ${
      randomPerson().age
    } years old. I am a ${randomPerson().profession}.`
  );
});
