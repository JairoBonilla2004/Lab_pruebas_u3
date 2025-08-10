/* eslint-env jest */
const suma = require("./sum");

test("suma 1 y 2 debe dar 3", () => {
  expect(suma(1, 2)).toBe(3);
});