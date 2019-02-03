const functions = require("./app");

test("adds 1 and 2 to equal 3", () => {
  expect(functions.add(1, 2)).toBe(3);
});

test("add should be defined", () => {
  expect(functions.add(1, 2)).toBeDefined();
});

test("add should be a number", () => {
  expect(functions.add(1, 2)).not.toBe(NaN);
});
