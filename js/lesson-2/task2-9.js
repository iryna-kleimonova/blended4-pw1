// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  a: null,
  b: null,

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  exist() {
    return this.a !== null && this.b !== null;
  },

  sum() {
    if (this.exist()) {
      return this.a + this.b;
    } else {
      return 'No such properties';
    }
  },

  mult() {
    if (this.exist()) {
      return this.a * this.b;
    } else {
      return 'No such properties';
    }
  },
};
