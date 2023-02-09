const number = [1, 2, 3, 4, 5, 6];

number.forEach(number => {
    console.log('Number is ' + number);
});

const animal = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const isBiggerName = animal.find((animal) => animal.length > 7);
console.log(isBiggerName);
