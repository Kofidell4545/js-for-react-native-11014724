// Task One

function processArray(numbers) {
  return number.map((num) => (num % 2 === 0 ? num ** 2 : num * 3));
}
const numbers = [17, 2, 3, 4, 5, 1, 7];
const workedEvenOddnumbers = processArray(numbers);
console.log(workedEvenOddnumbers);
