// // Написати функцію, яка запитує в користувача число з діапазону до тих пір, доки він його не введе
// // функція брудна, приймає початок і кінець діапазону, а повертає виключно коректне число числового типу!!!!!!

function answerUserNumber(val1, val2) {
    while (true) {
      let answerNumber = prompt("Enter number since " + val1 + " till " + val2);
      if (
        answerNumber === null ||
        answerNumber === "" ||
        (isNaN(Number(answerNumber)) &&
          answerNumber <= val1 &&
          answerNumber >= val2)
      ) {
        continue;
      }
      if (Number(answerNumber) >= val1 && Number(answerNumber) <= val2) {
        return Number(answerNumber);
      }
    }
  }
  
  console.log(answerUserNumber(25, 36));
  
  // Написати скрипт, який виводить числа (числа повинні бути парними і кратними 9) з діапазону від 0 до 100 у зворотньому порядку.
  // (* - це повинна бути функція)
  
  function logNumber(MAX_MEANING_RANGE = 100, MIN_MEANING_RANGE = 0) {
    for (let i = MAX_MEANING_RANGE; i >= MIN_MEANING_RANGE; i--) {
      if ((i % 2 == 0) & (i % 9 == 0)) {
        console.log(i);
      }
    }
  }
  logNumber(200, -200);
  
  // Створити функцію конструктор, яка описує користувача:
  // -ім'я
  // -прізвище
  // -вік
  // - метод, який логує ім'я та прізвище разом
  
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.logFullName = function () {
      console.log(this.firstName + " " + this.lastName);
    };
  }
  
  const construction = new Person("Stanislav", "Benet", 35);
  
  construction.logFullName();
  
  const construction2 = new Person("FirstName", "LastName", 18);
  construction2.logFullName();
  