const additionCalculator = require("./index.js");

test("addition of 4 and 6 to equal 10", () => {
  expect(additionCalculator(4, 6)).toBe(10);
});

test("addition of undefined and 6 to equal undefined", () => {
  expect(additionCalculator(undefined, 6)).toBeUndefined();
});

test("addition of undefined and undefined to equal undefined", () => {
  expect(additionCalculator(undefined, undefined)).toBeUndefined();
});

test("addition of '1' and '2' to equal undefined", () => {
  expect(additionCalculator('1', '2')).toBeUndefined();
});

test("addition of 1.25 and 2.55 to equal 3.8", () => {
  expect(additionCalculator(1.25, 2.55)).toBe(3.8);
});