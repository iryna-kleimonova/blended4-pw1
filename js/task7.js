// Функція checkStorage(storage, item) приймає два параметри:
// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити

// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:
// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві

// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].



function checkStorage(storage, item) {
    const lowerCaseStorage = storage.map(product => product.toLowerCase());
    const lowerCaseItem = item.toLowerCase();

    if (lowerCaseStorage.includes(lowerCaseItem)) {
        return `${lowerCaseItem} is available to order!`;
    } else {
        return "Sorry! We are out of stock!";
    }
}



console.log(checkStorage(["apple", "plum", "pear", "orange"], "plum")); // "plum is available to order!"
console.log(checkStorage(["mango", "poly", "banana", "cherry"], "apple")); // "Sorry! We are out of stock!"
console.log(checkStorage(["apple", "plum", "pear", "orange"], "kiwi")); // "Sorry! We are out of stock!"
console.log(checkStorage(["apple", "plum", "pear", "orange"], "Pear")); // "pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear", "orange"], "PEAR")); // "pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear", "orange"], "peAr")); // "pear is available to order!"