// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// let number = prompt('Введіть число');
// number = Number(number);
//     if (number === 10) {
//         alert('Вірно');
//     }
//     else {
//         alert('Невірно');
//     }
// console.log(number);

// let isAdult = confirm('Вам є 18 років?');
// console.log(isAdult);

// =======================================
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

const min = Math.floor(Math.random() * (59 - 0) + 0);
if (min >= 0 && min <= 15) {
  alert(`${min} входить в першу чверть`);
} else if (min > 15 && min <= 30) {
  alert(`${min} входить в другу чверть`);
} else if (min > 30 && min <= 45) {
  alert(`${min} входить в третю чверть`);
} else {
  alert(`${min} входить в четверту чверть`);
}
console.log(min);

// =======================================
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

let num = prompt('Введіть число від 1 до 4');
let result;
num = Number(num);

switch (num) {
  case 1:
    result = 'зима';
    break;
  case 2:
    result = 'весна';
    break;
  case 3:
    result = 'літо';
    break;
  case 4:
    result = 'осінь';
    break;
  default:
    result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
}
console.log(result);

// =======================================
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}

// =======================================
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
const result1 = getNumbers(1, 10);
console.log(`Сума парних чисел ${result1}`);
const result2 = getNumbers(1, 20);
console.log(`Сума парних чисел ${result2}`);

// =======================================
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

// =======================================
// Функція checkStorage(storage, item) приймає два параметри:
// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити

// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:
// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві

// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

function checkStorage(storage, item) {
  const lowerCaseStorage = storage.map((product) => product.toLowerCase());
  const lowerCaseItem = item.toLowerCase();

  if (lowerCaseStorage.includes(lowerCaseItem)) {
    return `${lowerCaseItem} is available to order!`;
  } else {
    return 'Sorry! We are out of stock!';
  }
}

console.log(checkStorage(['apple', 'plum', 'pear', 'orange'], 'plum')); // "plum is available to order!"
console.log(checkStorage(['mango', 'poly', 'banana', 'cherry'], 'apple')); // "Sorry! We are out of stock!"
console.log(checkStorage(['apple', 'plum', 'pear', 'orange'], 'kiwi')); // "Sorry! We are out of stock!"
console.log(checkStorage(['apple', 'plum', 'pear', 'orange'], 'Pear')); // "pear is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear', 'orange'], 'PEAR')); // "pear is available to order!"
console.log(checkStorage(['apple', 'plum', 'pear', 'orange'], 'peAr')); // "pear is available to order!"

// =======================================
