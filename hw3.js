
//* Задание 1
let password = 'пароль';
let enterPassword = prompt('Введите пароль');

if (enterPassword === 'пароль') {
    console.log('Введен верный пароль');
} else {
    console.log('Введен неверный пароль');
}

//* Задание 2

let c = prompt('Введите число');

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//* Задание 3

let d = prompt('Введите первое число');
let e = prompt('Введите второе число');

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//* Задание 4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);


//* Задание 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '1':
        console.log('Это месяц зимы');
        break;
    case '2':
        console.log('Это месяц зимы');
        break;
    case '12':
        console.log('Это месяц зимы');
        break;
    case '3':
        console.log('Это месяц весны');
        break;
    case '4':
        console.log('Это месяц весны');
        break;
    case '5':
        console.log('Это месяц весны');
        break;
    case '6':
        console.log('Это месяц лета');
        break;
    case '7':
        console.log('Это месяц лета');
        break;
    case '8':
        console.log('Это месяц лета');
        break;
    case '9':
        console.log('Это месяц осени');
        break;
    case '10':
        console.log('Это месяц осени');
        break;
    case '11':
        console.log('Это месяц осени');
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}