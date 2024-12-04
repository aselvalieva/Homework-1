let password = 'пароль';

let qwerty = String(prompt('Введите пароль'));

if (qwerty === password) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");

}




let promice = String(prompt('загадай число'))

if (promice >= 0 && promice <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}



let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));

if (d >= 100 || e >= 100) {
    console.log('Верно!');
} else {
    console.log('Не верно!');
}

let a = '2';
let b = '3';

alert(Number(a) + Number(b));


let monthNumber = Number(prompt('Введите месяц'))

switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;

    default:
        console.log('Такого месяца и нет ');
        break;
}
