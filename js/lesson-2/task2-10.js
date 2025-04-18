// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: 'Яблуко', price: 45, quantity: 7 },
  { name: 'Апельсин', price: 60, quantity: 4 },
  { name: 'Банан', price: 125, quantity: 8 },
  { name: 'Груша', price: 350, quantity: 2 },
  { name: 'Виноград', price: 440, quantity: 3 },
  { name: 'Банан', price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let total = 0;

  for (const fruit of fruits) {
    if (fruit.name.toLowerCase() === fruitName.toLowerCase()) {
      total += fruit.price * fruit.quantity;
    }
  }

  if (total === 0) {
    return `Sorry! There is no fruit ${fruitName}`;
  }

  return total;
}

console.log(calcTotalPrice(fruits, 'Банан')); // 👉 1375
console.log(calcTotalPrice(fruits, 'Апельсин')); // 👉 240
console.log(calcTotalPrice(fruits, 'Мандарин')); // 👉 "Sorry! There is no fruit Мандарин"
