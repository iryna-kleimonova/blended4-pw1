// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.body;
console.log(bodyEl);

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.getElementById('title');
console.log(titleEl);

// 3 - отримай елемент class="list" і виведи його в консоль;
const ulEl = document.querySelector('.list');
console.log(ulEl);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopicElements = document.querySelectorAll('[data-topic]');
console.log(dataTopicElements);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstDataTopic = dataTopicElements[0];
console.log(firstDataTopic);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastDataTopic = dataTopicElements[dataTopicElements.length - 1];
console.log(lastDataTopic);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const nextEl = titleEl.nextElementSibling;
console.log(nextEl);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3Elements = document.querySelectorAll('h3');
console.log(h3Elements);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3Elements.forEach(h3 => {
  h3.classList.add('active');
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navigationItem = document.querySelector('li[data-topic="navigation"]');
console.log(navigationItem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navigationItem.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const paragraphInNav = navigationItem.querySelector('p');
paragraphInNav.textContent = 'Я змінив тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const topicEl = document.querySelector(`li[data-topic="${currentTopic}"]`);
console.log(topicEl);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
topicEl.style.backgroundColor = 'lightblue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedTitle = document.querySelector('h3.completed');
console.log(completedTitle);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const completedLi = completedTitle.closest('li');
completedLi.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const paragraph = document.createElement('p');
paragraph.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.insertAdjacentElement('afterend', paragraph);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const newLi = document.createElement('li');
const newH3 = document.createElement('h3');
newH3.textContent = 'Властивість innerHTML';
const newP = document.createElement('p');
newP.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

newLi.appendChild(newH3);
newLi.appendChild(newP);
ulEl.appendChild(newLi);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const newListItemHTML = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>
`;

ulEl.insertAdjacentHTML('beforeend', newListItemHTML);

// 20 - очисти список
// ulEl.innerHTML = '';

// ===================================
// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const container = document.querySelector('.number-container');

for (let i = 0; i < 100; i++) {
  const number = randomNumber();
  const numberBlock = document.createElement('div');
  numberBlock.classList.add('number');
  numberBlock.textContent = number;

  // Add class based on even or odd number
  if (number % 2 === 0) {
    numberBlock.classList.add('even');
  } else {
    numberBlock.classList.add('odd');
  }

  container.appendChild(numberBlock);
}

// ===================================
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const usernameInput = document.querySelector('.js-username-input');

// usernameInput.addEventListener('input', () => {
//   if (usernameInput.value.length > 6) {
//     usernameInput.classList.add('success');
//     usernameInput.classList.remove('error');
//   } else {
//     usernameInput.classList.add('error');
//     usernameInput.classList.remove('success');
//   }
// });

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// usernameInput.addEventListener('focus', () => {
//   if (usernameInput.value.trim() === '') {
//     usernameInput.classList.add('error');
//     usernameInput.classList.remove('success');
//   } else {
//     usernameInput.classList.add('success');
//     usernameInput.classList.remove('error');
//   }
// });
// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// usernameInput.addEventListener('blur', () => {
//   if (usernameInput.value.trim() === '') {
//     usernameInput.classList.add('error');
//     usernameInput.classList.remove('success');
//   } else {
//     usernameInput.classList.add('success');
//     usernameInput.classList.remove('error');
//   }
// });

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector('.js-contact-form');
const policyCheckbox = document.querySelector('.js-policy-checkbox');
const usernameOutput = document.querySelector('.js-username-output');

usernameInput.addEventListener('input', () => {
  const value = usernameInput.value.trim();
  usernameOutput.textContent = value === '' ? 'Anonymous' : value;
});

// 2. Сабміт форми
form.addEventListener('submit', event => {
  event.preventDefault();

  const userName = usernameInput.value.trim();
  const isAccepted = policyCheckbox.checked;

  if (userName === '' || !isAccepted) {
    alert(
      "Будь ласка, заповніть ім'я та погодьтесь із політикою конфіденційності.",
    );
    return;
  }

  const userData = {
    userName: userName,
  };

  console.log(userData);

  // Очистка форми
  usernameInput.value = '';
  policyCheckbox.checked = false;
  usernameOutput.textContent = 'Anonymous';
});

// ===================================
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меншим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
const increaseBtn = document.querySelector('.js-increase');
const decreaseBtn = document.querySelector('.js-decrease');

// Функція для отримання поточного розміру
const getSize = () => box.offsetWidth;

// Збільшення
increaseBtn.addEventListener('click', () => {
  const newSize = getSize() + 20;
  box.style.width = `${newSize}px`;
  box.style.height = `${newSize}px`;
});

// Зменшення
decreaseBtn.addEventListener('click', () => {
  const newSize = getSize() - 20;
  // Мінімальний розмір 20px, щоб квадрат не зник
  if (newSize >= 20) {
    box.style.width = `${newSize}px`;
    box.style.height = `${newSize}px`;
  }
});
