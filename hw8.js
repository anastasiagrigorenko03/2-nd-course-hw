//Задание 1
 const people = [
   { name: "Глеб", age: 29 },
   { name: "Анна", age: 17 },
   { name: "Олег", age: 7 },
   { name: "Оксана", age: 47 },
 ];
 console.log(
   people.sort(function (a, b) {
     return a.age - b.age;
   })
 );

//Задание 2
 function filter(array, ruleFunction) {
   let result = [];
   for (let element of array) {
     if (ruleFunction(element)) {
       result.push(element);
     }
   }
   return result;
 }
 function isPositive(number) {
   return number > 0;
 }
 function isMale(person) {
   return person.gender === "male";
 }
 console.log(filter([3, -4, 1, 9], isPositive));
 const peopl = [
   { name: "Глеб", gender: "male" },
   { name: "Анна", gender: "female" },
   { name: "Олег", gender: "male" },
   { name: "Оксана", gender: "female" },
 ];
 console.log(filter(peopl, isMale));

//Задание 3
 const timer = () => {
   let date = new Date();
   console.log(date);
   const interval = setInterval(() => {
     let ddate = new Date();
     console.log(ddate);
   }, 3000);

   setTimeout(() => {
     clearInterval(interval);
     console.log(`Прошло ${deadline} секунд`);
   }, deadline * 1000);
 };

 const deadline = prompt("На сколько секунд вы хотите поставить таймер?");
 timer();

//Задание 4
 function delayForSecond(callback) {
   const interval = setInterval(() => {
     callback();
   }, 1000);

   setTimeout(() => {
     clearInterval(interval);
   },1000);
 }

 delayForSecond(function () {
   console.log("Привет, Глеб!");
 });

 function delayForSecond(callback) {
   setTimeout(() => {
     callback();
   }, 1000);
 }
 delayForSecond(function () {
   console.log("Привет, Глеб!");
 });

//Задание 5
 function delayForSecond(cb) {
   setTimeout(() => {
     console.log("Прошла одна секунда");
     if (cb) {
       cb();
     }
   }, 1000);
 }
 function sayHi(name) {
   console.log(`Привет, ${name}!`);
 }
 delayForSecond(() => sayHi("Глеб"));