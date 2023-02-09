// let toDolist = ['почитать', 'помыть посуду', 'помыть машину'];
// let toDolist2 = Array.of('почитать', 'помыть посуду', 'помыть машину');
// let  toDolist3 = new Array('почитать', 'помыть посуду', 'помыть машину');

// let tasksCount = toDolist.length;
// console.log(tasksCount);

// const toDolist4 = ['почитать', 'помыть посуду', 'помыть машину'];
// const firstElement = toDolist4[0];
// const lastElement = toDolist4[toDolist4.length - 1];
// console.log(firstElement);
// console.log(lastElement);

// const toDolist5 = ['купить фотик', 'купить ноут', 'купить мышку'];
// toDolist5[0] = 'купить машину';
// console.log(toDolist5);

// let toDolist6 = ['купить фотик', 'купить ноут', 'купить мышку'];
// toDolist6.push('купить планету');
// console.log(toDolist6);

// let toDolist7 = ['купить фотик', 'купить ноут', 'купить мышку'];
// toDolist7.unshift('купить деньги');
// console.log(toDolist7);

// let toDolist8 = ['купить фотик', 'купить ноут', 'купить мышку'];
// let firstTwiTasks = toDolist8.slice(0,2)
// console.log(firstTwiTasks);

// let toDolist9 = ['купить фотик', 'купить ноут', 'купить мышку'];
// let deletedTask = toDolist9.splice(1,1);
// console.log(deletedTask);
// console.log(toDolist9);

// let toDolist10 = ['купить фотик', 'купить ноут', 'купить мышку'];

// for (const task of toDolist10) {
//     console.log(task);
// }

// Homework
// let toDolist11 = ['изучать js', 'изучать html', 'изучать css'];
// let addTask = toDolist11.push('добавить новую задачу');
// console.log(toDolist11);

// let deletedTask = toDolist11.splice(0,2);
// console.log(toDolist11);

// let toDolist12 = ['изучать js', 'изучать html', 'изучать css'];
// for(const task of toDolist12) {
//     console.log(task);
// }


// const array = [1, 2, 3, 4, 5];
// const array2 = [6, 7];
// const array3 = [8, 9];

// array.push() - Добавляет элемент в конец списка
// array.unshift() - Добавляет элемент в начало списка
// array.pop() - Удаляет последний элемент списка
// array.shift() - Удаляет первый элемент списка
// array.splice() - Удаляет любой элемент из списка
// array.slice() - Вырезает часть элементов из списка
// array.concat() - Объединяет все массивы в один

// console.log(array.splice(2, 1, 10, 11));
// console.log(array);

// const newArray = array.slice(2,4);
// console.log(newArray);



// Обьединение массивов

// const array = [1, 2, 3, 4, 5];
// const array2 = [6, 7];
// const array3 = [8, 9];

// const newArray = array.concat(array2, array3, 10, 11);
// console.log(newArray);


// Метод перебора массива "forEach"

// const array = [1, 2, 3, 4, 5];
// array.forEach((item, index, ar) => {
//     console.log(item, index, ar);
// })


//Метод поиска элементов внутри массива

// array.indexOf() - команда для поиска элемента в массиве
// array.lastIndexOf() - поиск элемента в массиве с конца
// array.includes()- находится ли элемент вообще в массиве(true or false)
// array.findIndex() - проверка наличия {объекта} в массиве

// const array = ["a", "b", "c", "d", "e"];

// const result = array.indexOf("c");

// // if(result !== -1) {
// //     console.log(array[result]);
// // } Просто проверка

// console.log(result);

// const task = [{'To buy a car' : 'In progress'}, 
// {'To make a bed' : 'Done'}, 
// {'Go to the gym' : 'To do'},
// ];

// const result = task.filter((key) => key)

// const result = task.findIndex((key) => key['To make a bed']);
// console.log(task[result]);


const array = [1, 2, 3, 4, 5, 6, 7];

const result = array.map((item) => item * 2);
console.log(result);
