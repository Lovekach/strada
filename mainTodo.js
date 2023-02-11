const list = [
    { name: 'Make a bed', status: 'In progress', priority: 'Low' },
    { name: 'Create a task', status: 'In Progress', priority: 'High' },
    { name: 'Write a post', status: 'To Do', priority: 'Low' },
    { name: 'Wash a car', status: 'In Progress', priority: 'High' },
    { name: 'Have a walk', status: 'Done', priority: 'High' },
];

//Добавление объекта в массив
function addTask(nameText, statusText, priorityText) {
    list.push({ name: nameText, status: statusText, priority: priorityText });
   

}
//Удаление объекта из массива
function deleteTask(nameText, statusText, priorityText) {
    list.pop({ name: nameText, status: statusText, priority: priorityText });
   
}

//Изменение статуса у объекта, находящийся в массиве
function changeStatus(nameText, statusText, priorityText) {
    list[4] = ({ name: nameText, status: statusText, priority: priorityText });
    
}

//Сортировка объектов в массиве по статусу приоритета
function rangeStatus(a, b) {
    if (a.priority === b.priority) {
        return 0;
    }

    if (a.priority === 'Low' && b.priority !== 'Low') {
        return -1;

    }

    return 1;

}





addTask('Go to the cinema', 'In progress', 'Low');
console.log(list);

deleteTask('Write a post', 'To Do', 'Low');
console.log(list);

changeStatus('Have a walk', 'To Do', 'Low');
console.log(list);



list.sort(rangeStatus);
console.log(list);









