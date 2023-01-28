// function someFunc( ) {
//     console.log('function starts here');


//     console.log('function ends here');
// }

// someFunc(...);
// someFunc(...);

function sayHi(name) {
    const greeting = 'Привет, ' + name + '!';
    console.log(name);
}
 sayHi('Миша');
 sayHi('Гриша');


 function carModel(name) {
    const many = 'Эта машина марки ' + name + '.' + ' Она очень крутая!'
    console.log(many);
 }

 carModel('Opel');
 carModel('Pegeout');
 carModel('Audi');
 carModel('BMW');



 function countryDiffrient(name) {
    const land = "Одна и лучших стран в Европе " + name + ' ,' + ' однозначно!';
    console.log(land);
 }

countryDiffrient('France');
countryDiffrient('Spain');
countryDiffrient('Wales');



function myFamily(role) {
    const name = 'В состав моей семьи входят:' + role;
    console.log(name);
}

myFamily('Папа');
myFamily('Мама');
myFamily('Сестра');
myFamily('Брат');

function checkAge(age) {
    if(age < 18) {
    console.log('you are not allowed');
} else if (age >= 18) {
    console.log('you are welcome!');
    }
}

checkAge('19');
checkAge('13');
checkAge('18');


function myCar(name) {
    const type = 'У меня есть машина марки ' + name + ' и она очень дорогая';
    console.log(type);
}

myCar("Audi");
myCar("BMW");
myCar("Mazda");

function ownerCar(age) {
   if (age >= 18) {
    console.log('Имеешь право сесть за руль');
} else if (age < 18) {
    console.log('Даже не думай садиться за руль!');
}
}
ownerCar(13);
ownerCar(23);
ownerCar(18);

function sayHi(name = 'Валера') {
    const greeting = 'Хей, ' + name + ' !'
    console.log(greeting);
}
sayHi();


function sum(a, b) {
    return a + b;
}
let result = sum(1, 2);
console.log(result);


function calc(a, b, operation) {
    if ( operation == a + b) {
        console.log(3);
    } else if (operation == a * b) {
        console.log(2);
    } else if (operation == a - b) {
        console.log(1);
    }
}
calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2);



