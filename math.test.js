/* eslint-env jest */
import { isPrime, reverseString } from "./math.js";

test("isPrime identifica correctamente números primos", () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(9)).toBe(false);
  expect(isPrime(1)).toBe(false);
});

test("reverseString invierte correctamente cadenas", () => {
  expect(reverseString("hola")).toBe("aloh");
  expect(reverseString("abc")).toBe("cba");
  expect(reverseString("")).toBe("");
});
