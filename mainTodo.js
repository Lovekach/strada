const list = [
    { name: 'Make a bed', status: 'In progress', priority: 'Low' },
    { name: 'Create a new task', status: 'In Progress', priority: 'High' },
    { name: 'Write a post', status: 'To Do', priority: 'Low' },
    { name: 'Wash a car', status: 'In Progress', priority: 'High' },
    { name: 'Have a walk', status: 'Done', priority: 'High' },
];

function addTask(nameText, statusText, priorityText) {
    list.push({ name: nameText, status: statusText, priority: priorityText });
    console.log(list);

}
function deleteTask(nameText, statusText, priorityText) {
    list.pop({ name: nameText, status: statusText, priority: priorityText });
    console.log(list);
}

function changeStatus(nameText, statusText, priorityText) {
    list[4] = ({ name: nameText, status: statusText, priority: priorityText });
    console.log(list);

}

function compareNumeric(a, b) {
    if (a.priority === b.priority) {
        return 0;
    }

    if (a.priority === 'Low' && b.priority !== 'Low') {
        return -1;

    }

    return 1;

}

list.sort(compareNumeric);
console.log(list);

addTask('Go to the cinema', 'In progress', 'Low');
deleteTask('Write a post', 'To Do', 'Low');
changeStatus('Have a walk', 'To Do', 'Low');








