function addRecord(key, value) {
    this.list[key] = value;
}

const phoneBook = {
    list: {
        "John": 123,
        "Jane Doe": 678,
    },
    addRecord
};
const toDoList = {
    list: {
        "make a video": "open",
    },
    addRecord
}

toDoList.addRecord('do something', 'open');
console.log(toDoList.list);

//Math
console.log(Math.random());
console.log(Math.min(1,33));
console.log(Math.max(1,22));
console.log(Math.pow(1,2));

// Округление

// Округление в меньшую сторону
Math.floor(2.3); // 2
Math.floor(2.9); // 2

//Округление в большую сторону
Math.ceil(1.3); // 2
Math.ceil(0.3); // 1
 
//Округление до ближайшего числа
Math.round(2.4); // 2
Math.round(2.5); // 3

//Оставить только целое число 
Math.trunc(5.4); // 5
Math.trunc(9.8); // 9
Math.trunc(-1.2); // -1

//Особенности
console.log(0.1 + 0.2 == 0.3); // false

// toFixed
let num = 12.34;
console.log(num.toFixed(1) ); // '12.3'


let numb = 12.36;
console.log(num.toFixed(1) ); // '12.4'

let numbe = 12.34;
console.log(num.toFixed(4) ); // '12.3400'

// isFinite и isNan 
