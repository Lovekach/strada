function createUser(name, age) {
    return {
        name: name,
        age: age,
    }
}

const user = createUser('Vasya', 30);
const user2 = createUser('Pete', 33);

console.log(user);
console.log(user2);
