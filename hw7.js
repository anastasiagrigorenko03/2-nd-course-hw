//Задание 1
 let str = "григоренко анастасия олеговна";
 console.log(str.toUpperCase());

//Задание 2
// function task(arr, str) {
//   return arr.filter((item) => item.toLowerCase().startsWith(str.toLowerCase()));
// }
// const arr = ["Привет", "Как дела?", "Привет хорошо"];
// let str = "п";
// const filtArr = task(arr, str);
// console.log(filtArr);

//Задание 3
 let a = 32.58884;
 console.log(Math.floor(a));
 console.log(Math.ceil(a));
 console.log(Math.round(a));

//Задание 4
 console.log(Math.min(52, 53, 49, 88, 21, 31));
 console.log(Math.max(52, 53, 49, 88, 21, 31));

 let arr = [52, 53, 49, 77, 21, 31];
 for (let i = 0; i < arr.length; i++) {
   let mx = arr[0];
   let mn = arr[0];
   for (element of arr) {
     if (element < mn) {
       mn = element;
     } else if (element > mx) {
       mx = element;
     }
   }
 }

//Задание 5
 function rand() {
   let number = Math.floor(Math.random() * 10) + 1;
   console.log(number);
 }
 rand();

//Задание 6
 let num = Number(prompt("Введите число"));
 function getRandomArrNumbers(num) {
   const arrayLength = Math.floor(num / 2);
   const randomArray = [];
   for (let i = 0; i < arrayLength; i++) {
     const randomNum = Math.floor(Math.random() * num);
     randomArray.push(randomNum);
   }
   return randomArray;
 }
 const result = getRandomArrNumbers(num);
 console.log(result);

// Задание 7
// let numOne = Number(prompt("Введите первое число"));
// let numTwo = Number(prompt("Введите первое число"));
// function getRandimArray() {
//   return Math.floor(Math.random() * (numTwo - numOne + 1) + numOne);
// }
// const arr = getRandimArray(numOne, numTwo);
// console.log(arr);

//Задание 8
 let date = new Date();
 console.log(date);

//Задание 9
 let currentDate = new Date();
 currentDate.setDate(currentDate.getDate() + 73);
 console.log(currentDate);

//Задание 10
 const days = [
   "Воскресенье",
   "Понедельник",
   "Вторник",
   "Среда",
   "Четверг",
   "Пятница",
   "Суббота",
 ];

 const months = [
   "января",
   "февраля",
   "марта",
   "апреля",
   "майя",
   "июня",
   "июля",
   "августа",
   "сентября",
   "октября",
   "ноября",
   "декабря",
 ];

 let myDate = new Date();
 let fullDate =
   "Сегодня: " +
   myDate.getDate() +
   " " +
   months[myDate.getMonth()] +
   " " +
   myDate.getFullYear() +
   ", " +
   "это " +
   days[myDate.getDay()];

 console.log(fullDate);
 let myNDate = new Date();
 let hour = myDate.getHours();
 let minute = myDate.getMinutes();
 let second = myDate.getSeconds();

 if (minute < 10) {
   minute = "0" + minute;
 }
 if (second < 10) {
   second = "0" + second;
 }
 console.log("Текущее время: " + hour + ":" + minute + ":" + second);
