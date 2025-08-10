// math.js

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

module.exports = { isPrime, reverseString };
