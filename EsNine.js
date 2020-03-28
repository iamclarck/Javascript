// ES9 Features

// 1.Object Spread Opearator

const animals = {
    lion: 4,
    monkey: 12,
    tiger: 5
}

const {
    tiger,
    ...rest
} = animals

console.log(tiger, rest);

const array = [1, 2, 3, 4, 5, 6];

function sum(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

console.log(sum(...array));


// 2.Finally

// 3.for await of


// ES6
// Callback queue -> Task queue
setTimeout(() => {
    console.log('1', 'is the loneliest number')

}, 0);
setTimeout(() => {
    console.log('2', 'can be bad as 1')

}, 10);

// Job queue -> Microtask queue
Promise.resolve('hi').then((data) => console.log('2', data));


// Normal
console.log('3', 'is a crowd');