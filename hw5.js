// Задание 1
// let a = prompt(Введите первое число );
// let b = prompt(Введите второе число );
// function mathExample(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// alert(mathExample(a, b));

// Задание 2
// let a = prompt(Введите число);
// function checkNum(a) {
//   if (a % 2 == 0) {
//     return Число четное ${a};
//   } else {
//     return Число нечетное ${a};
//   }
// }
// alert(checkNum(a));

// Задание 3.1
// let x = prompt(Введите число);
// function squareOfTheNumber(x) {
//   console.log(x * x);
// }
// squareOfTheNumber(x);
// Задание 3.2
// let x = prompt(Введите число);
// function squareOfTheNumber(x) {
//   return x * x;
// }
// console.log(squareOfTheNumber(x));

// Задание 4
// let ask = prompt(Сколько тебе лет?);
// function human(ask) {
//   if (ask <= 0) {
//     console.log(Вы ввели неправильное значение);
//   } else if (ask <= 12) {
//     console.log(Привет друг!);
//   } else if (ask >= 13) {
//     console.log(Добро пожаловать);
//   }
// }
// human(ask);

// Задание 5
// let a = Number(prompt(Введите первое число));
// let b = Number(prompt(Введите второе число));
// function exampl(a, b) {
//   if (Number.isNaN(a) || Number.isNaN(b)) {
//     return Одно или оба значения не являются числом;
//   } else {
//     return a * b;
//   }
// }
// console.log(exampl(a, b));

// Задание 6
// let num = Number(prompt("Введите число"));
// function check(num) {
//   if (Number.isNaN(num)) {
//     return "Переданный параметр не является числом";
//   } else {
//     return ${num} в кубе равняется ${num ** 3};
//   }
// }
// console.log(check(num));

// Задание 7
// function getArea() {
//   return Площадь круга равна =${Math.PI * this.radius ** 2};
// }
// function getPerimeter() {
//   return Периметр окружности =${2 * Math.PI * this.radius};
// }

// const circle1 = {
//   radius: 3,
//   getArea: getArea,
//   getPerimeter: getPerimeter,
// };
// const circle2 = {
//   radius: 6,
//   getArea: getArea,
//   getPerimeter: getPerimeter,
// };
// console.log(circle1.getArea());
// console.log(circle2.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getPerimeter());\

// Задача 8

let number = Number(prompt("Введите номер месяца!"));
function date(number) {
  if ((number >= 1 && number <= 2) || number === 12) {
    return Зима;
  } else if (number >= 3 && number <= 5) {
    return Весна;
  } else if (number >= 6 && number <= 8) {
    return Лето;
  } else if (number >= 9 && number <= 11) {
    return Осень;
  } else {
    return `Такого месяца нет!`;
  }
}
alert(date(number));