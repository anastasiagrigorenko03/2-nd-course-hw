// Задание 1
// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] === 10) break;
//   console.log(arr[i]);
// }

// Задание 2
// const arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.indexOf(4));

// Задание 3
// let arr = [1, 3, 5, 10, 20];
// console.log(arr.join(" "));

// Здание 4
// let array = [];
// // Внешний цикл для создания строк
// for (let i = 0; i < 3; i++) {
//   // Создаем пустую строку
//   let row = [];
//   // Внутренний цикл для создания столбцов
//   for (let j = 0; j < 3; j++) {
//     row.push(1);
//   }
//   // Добавляем строку в многомерный массив
//   array.push(row);
// }
// console.log(array);

// Здание 5
// let arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

// Здание 6
// let arr = [9, 8, 7, "a", 6, 5];
// arr.sort().pop();
// console.log(arr);

// Здание 7
// let arr = [9, 8, 7, 6, 5];
// let ask = Number(prompt("Угадай число"));
// if (arr.includes(ask)) {
//   alert("Угадал");
// } else {
//   alert("Не угадал");
// }

// Здание 8
// let str = "abcdef";
// console.log((str = str.split("").reverse().join("")));

// Здание 9
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const flatArr = arr.flat();
// console.log(flatArr);

// Здание 10
// let amount = 0;
// let arr = [1, 3, 4, 6, 7, 9, 10];
// for (let i = 0; i < arr.length - 1; i++) {
//   let sum = arr[i] + arr[i + 1];
//   console.log(sum);
// }

// let amount = 0;
// let arr = [1, 3, 4, 6, 7, 9, 10];
// for (let i = 0; i < arr.length - 1; i++) {
//   let sum = arr[i] + arr[i + 1];
//   console.log(Сумма, ${arr[i]}, и , ${arr[i + 1]}, равна ${sum});
// }

// Здание 11
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const square = arr.map((num) => num ** 2);
// console.log(square);

// Здание 12
// const arr = ["Анастасия", "Григоренко"];
// let newArr = arr.map((word) => word.length);
// console.log(newArr);

// Здание 13
// const arr = [1, -2, 3, -4, 5, -6, 7, 8, -9, 10];
// function getNegative(array) {
//   let negatives = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       negatives.push(array[i]);
//     }
//   }
//   return negatives;
// }
// console.log(getNegative(arr));

// Здание 14
// let array = [];
// for (let i = 0; i < 10; i++) {
//   let randomValue = Math.floor(Math.random() * 11);
//   array.push(randomValue);
// }
// console.log(Массив с рандомными числами ${array});

// let count = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     count.push(array[i]);
//   }
// }
// console.log(Массив с рандомными числами ${count});

// Здание 15
// let array = [];
// for (let i = 0; i < 6; i++) {
//   let randomValue = Math.floor(Math.random() * 11);
//   array.push(randomValue);
// }
// let sum = array.reduce(function (acc, val) {
//   return acc + val;
// }, 0);
// let average = sum / array.length;
// console.log(Массив с рандомными числами ${array});
// console.log(Среднее арифмитическое ${average});