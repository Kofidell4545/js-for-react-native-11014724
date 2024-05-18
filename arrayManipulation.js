//Task One
function processArray(numbers) {
  return numbers.map((num) => (num % 2 === 0 ? num ** 2 : num * 3));
}

const numbers = [17, 2, 3, 4, 5, 1, 7];
const workedEvenOddnumbers = processArray(numbers);
console.log(workedEvenOddnumbers);

// Task Two
function formatArrayStrings(strings, workedEvenOddnumbers) {
  return strings.map((string, index) =>
    workedEvenOddnumbers[index] % 2 === 0
      ? string.toUpperCase()
      : string.toLowerCase()
  );
}

const strings = ["kofi", "ama", "efia", "maame", "kojo", "kwame", ""];
const formattedString = formatArrayStrings(strings, workedEvenOddnumbers);
console.log(formattedString);
