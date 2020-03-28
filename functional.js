// Functional Programming

// 1. Idempotence
// means no matter what is the input it should give same output
function add(num1, num2) {
    return num1 + num2
}

add(2, 3)

// 2.Imperative vs Declerative

// Imperative tells computer what to do and how to do?
// Declerative tells computer what to do and what should happen

// Imperative
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// Declerative
[1, 2, 3].forEach(item => console.log(item))

// 3.Immutability

// Curring

const multiplyBy = (a) => (b) => a * b;
const multiplyBy5 = multiplyBy(5)
console.log(multiplyBy5)

// Partial Application
// is process of producing a function with smaller number of parameter

const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5)
console.log(partialMultiplyBy5(4, 10))