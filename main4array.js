const number = [1, 2, 3, 4, 5, 6];

number.forEach(number => {
    console.log('Number is ' + number);
});

const animal = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const isBiggerName = animal.find((animal) => animal.length > 7);
console.log(isBiggerName);


const number2 = [1, 11, -2, 3, -10, 4];
const result2 = number2.filter(item => item < 0);
console.log(result2);

const number3 = [1, 11, -2, 3, -10, 4];
const result3 = number3.map((number3) => Math.abs(number3));
console.log(result3);

const number4 = [1, 11, -2, 3, -10, 4];
const result4 = number4.sort((a, b) => a - b);
console.log(result4);