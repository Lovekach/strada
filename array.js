let toDolist = ['почитать', 'помыть посуду', 'помыть машину'];
let toDolist2 = Array.of('почитать', 'помыть посуду', 'помыть машину');
let  toDolist3 = new Array('почитать', 'помыть посуду', 'помыть машину');

let tasksCount = toDolist.length;
console.log(tasksCount);

const toDolist4 = ['почитать', 'помыть посуду', 'помыть машину'];
const firstElement = toDolist4[0];
const lastElement = toDolist4[toDolist4.length - 1];
console.log(firstElement);
console.log(lastElement);

const toDolist5 = ['купить фотик', 'купить ноут', 'купить мышку'];
toDolist5[0] = 'купить машину';
console.log(toDolist5);

let toDolist6 = ['купить фотик', 'купить ноут', 'купить мышку'];
toDolist6.push('купить планету');
console.log(toDolist6);

let toDolist7 = ['купить фотик', 'купить ноут', 'купить мышку'];
toDolist7.unshift('купить деньги');
console.log(toDolist7);

let toDolist8 = ['купить фотик', 'купить ноут', 'купить мышку'];
let firstTwiTasks = toDolist8.slice(0,2)
console.log(firstTwiTasks);

let toDolist9 = ['купить фотик', 'купить ноут', 'купить мышку'];
let deletedTask = toDolist9.splice(1,1);
console.log(deletedTask);
console.log(toDolist9);

let toDolist10 = ['купить фотик', 'купить ноут', 'купить мышку'];

for (const task of toDolist10) {
    console.log(task);
}

Homework
let toDolist11 = ['изучать js', 'изучать html', 'изучать css'];
let addTask = toDolist11.push('добавить новую задачу');
console.log(toDolist11);

let deletedTask = toDolist11.splice(0,2);
console.log(toDolist11);

let toDolist12 = ['изучать js', 'изучать html', 'изучать css'];
for(const task of toDolist12) {
    console.log(task);
}
