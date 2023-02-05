const list = {
    'create a new practice task': 'In Progress', 
	'make a bed': 'Done', 
	'write a post': 'To Do',
}

function changeStatus(taskName,status) {
    list[taskName] = status;
}
function addTask(taskName) {
    list[taskName] = 'To Do';
}
function deleteTask(taskName) {
    delete list['make a bed'];
}


changeStatus("write a post", "Done"); 
console.log(list['create a new practice task']);

addTask('have a walk');
console.log(list['have a walk']);

deleteTask('make a bed'); 
console.log(list['make a bed']);

console.log(list);


// showList(); 