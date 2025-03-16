// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a > b ? b : a;
    }
    return 'Not a number!';
}

console.log(min(5, 10)); // 5
console.log(min(10, 7)); // 7
console.log(min('5', 10)); // 'Not a number!'
console.log(min(7, 'text')); // 'Not a number!'

// Але якщо використовувати prompt, то введені дані завжди будуть рядком
// let a = prompt('Введіть перше число');
// let b = prompt('Введіть друге число');

// console.log(min(a, b));
