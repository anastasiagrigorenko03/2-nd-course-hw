//* задание 1
let a = 10;
alert(a);
a = 20;
alert(a);
//* задание 2
let year = 2007;
console.log(year);
//* задание 3
let nam = "Брендан Айк";
console.log(nam);
//* задание 4
let Number1 = 10;
let Number2 = 2;
alert(Number1 + Number2);
alert(Number1 - Number2);
alert(Number1 * Number2);
alert(Number1 / Number2);
//* задание 5
let numbe = 2;
let result = numbe ** 5;
alert(result);
//* задание 6
let q = 9;
let w = 2;
let res = q % w;
alert(res);
//* задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
//* задание 8
let age = prompt("Сколько вам лет");
alert(age);
//* задание 9
const user = {
  name: "Анастасия",
  age: 20,
  isAdmin: true,
};
user.cityOfResidence = true;
user.age = 30;
delete user.cityOfResidence;
let info = prompt("Какую информацию хотите узнать о пользователе");
alert(user[info]);
//* задание 10
let whatIsYourName = prompt("Как тебя зовут?");
alert(`Привет, ${whatIsYourName} !`);
