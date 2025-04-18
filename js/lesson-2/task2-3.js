// Напишіть функцію calculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function calculateAverage(...args) {
  console.log(args);
  let sum = 0;
  let count = 0;
  for (const arg of args) {
    if (typeof arg === 'number') {
      sum += arg;
      length++;
    }
  }
  return count === 0 ? 0 : sum / count;
}

console.log(calculateAverage(5, 6, 32, 'afsfd'));
