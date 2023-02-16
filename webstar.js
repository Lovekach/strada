// const phoneBook = {
//     list: {
//         mama: 12,
//         papa: 13,
//         brat: 14,
//     },
//     add(name, number) {
//         this.list[name] = number;
//     }
// };
// phoneBook.add("sistr", 15);
// console.log(phoneBook.list.sistr);

// function addRecord(key,value) {
//     this.list[key] = value;
// }

// const phoneBook = {
//     list: {
//         "John": 12,
//         "Jane": 34,
//         "Jade": 45,
//     },
//     addRecord
// };

// const toDoList = {
//     list: {
//         "make a video": "open",
//     },
//     addRecord
// }
// toDoList.addRecord('do somethign', 'open');
// console.log(toDoList.list)
// let anyText = ` string 1
// string 2
// string 3`

// console.log(anyText);


//String

// let anyText = '"Hello" world'

// console.log(anyText);


// let anyText = 'Hello world'
// console.log(anyText.length[0]);

//Array 
// let toDoList = ['почитать', 'помыть посуду', 'помыть машину'];
// const firstElement = toDoList[0];
// toDoList[0] = 'освежиться'
// const lastElement = toDoList[toDoList.length - 1];
// console.log(toDoList[0]);
// let toDoList = Array.of('почитать', 'помыть посуду', 'помыть машину');
// let toDoList = new Array('почитать', 'помыть посуду', 'помыть машину');

// function createCounter() {
//     let counter = 1;

//     return() => {
//         return counter++
//     }
//    ;
	
// }

// let counterA = createCounter();
// let counterB = createCounter();

// console.log(counterA()); 
// console.log(counterA()); 
// console.log(counterA()); 

// console.log(counterB()); 
let from = 1;
let to = 10;
let timerId = setInterval(() => printNumbers(from++, to), 1000);

function printNumbers(from, to) {
    if (from <= to) {
        console.log(from);
 } else{
    clearInterval(timerId);
 }
    
};