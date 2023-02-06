const user = {
    name: 'Vasya',
    age: 30,
    lastName: 'Pupkin',
    34: '34',
}
console.log('age' in user); // Проверка на наличие св-ва в обьекте user(true или false);

for(let key in user) {
    // console.log(key);
    console.log(key + ' : ' + user[key]);
}