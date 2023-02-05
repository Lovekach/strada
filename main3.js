const list = {
    'create a new practice task': 'In Progress', 
	'write a post': 'To Do',
    'wash a car' : 'In Progress',
    'have a walk' : 'Done',
    'make a bed' : 'In progress',
    'have a breakfast' : 'To Do'

}

function changeStatus(taskName,status) {
    list[taskName] = status;
}
function addTask(taskName) {
    list[taskName] = 'To Do';
}
function addTask(taskName) {
    list[taskName] = 'Todo';
}

function changeStatus(taskName, status) {
    list[taskName] = status ;
}

// function deleteTask(taskName) {
//     delete list[taskName];
// }
function deleteTask(taskName) {
    delete list[taskName];
}
function showList() {
    showWithCurrentStatus('To Do');
    showWithCurrentStatus('In Progress');
    showWithCurrentStatus('Done');
}

function showWithCurrentStatus(status) {
    let flag = false;
    for ( const p in list)  {
        if (list[p] === status) {
            flag = true;
            console.log(p + ' : ' + list[p]);
        }
    }
    if (!flag) {
        console.log('Nothing is ' + status);
    }
    console.log();
}

changeStatus("write a post", "Done"); 
console.log(list['create a new practice task']);

addTask('have a walk');
console.log(list['have a walk']);

addTask('have a breakfast');
console.log(list['have a breakfast']);

changeStatus('have a breakfast', 'In Progress');
console.log(list['have a breakfast']);

deleteTask('have a breakfast');
console.log(list['have a breakfast']);

deleteTask('make a bed'); 
console.log(list['make a bed']);

console.log(list);

showList(); 

// добавить новую задачу 
// поменять данные задачи на 'In progress'
//  удалить эту задачу из списка
// вывести весь список чтобы убедиться чтобы этой задачи больше нет