import { add, subtract, divide, multiply } from "./index";

test("add(2, 3) should return 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("add(-5, 3) should return a negative value", () => {
  expect(add(-5, 3)).toBeLessThan(0);
});

test("add(0.1, 0.2) should return a value close to 0.3", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("subtract(15, 5) should return 10", () => {
  expect(subtract(15, 5)).toBe(10);
});

test("subtract(5, 15) should return a negative value", () => {
  expect(subtract(5, 15)).toBeLessThan(0);
});

test("multiply(2, 4)should return 8", () => {
  expect(multiply(2, 4)).toBe(8);
});

test("multiply(-2, 4) should return -8", () => {
  expect(multiply(-2, 4)).toBe(-8);
});

test("multiply(2, -4) should return -8", () => {
  expect(multiply(2, -4)).toBe(-8);
});

test("multiply(-2, -4) should return 8", () => {
  expect(multiply(-2, -4)).toBe(8);
});

test("divide(9, 3) should return 3", () => {
  expect(divide(9, 3)).toBe(3);
});

test("divide(9, 0) should return 'You should not dothis!'", () => {
  expect(divide(9, 0)).toBe("You should not do this!");
});
