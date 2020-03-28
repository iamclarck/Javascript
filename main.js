//     return 5;
// }

// a.hi = 'hihihi';
// console.log(a.hi)

// Pass by value and Pass by Reference

let obj = {
    a: "a",
    b: "b",
    c: {
        deep: "try and copy me"
    }
};

// deep cloning
let superClone = JSON.parse(JSON.stringify(obj));

// shalow copy
// let clone = Object.assign({}, obj);
let clone2 = {
    ...obj
};
obj.c = 5;
console.log(clone2);
console.log(superClone);

// type coercion

console.log(1 === "1");
// console.log(-0 === +0);
console.log(Object.is(-0 === +0));

// Function constructor

const four = new Function("return 4");
const five = new Function("num", "return num");
console.log(four());
console.log(five(5));

// Functions are first class citizens in JS

//1

let stuff = function() {};
//2
function a(func) {
    func();
}

a(function() {
    console.log("hii there");
});

//3
function b() {
    return function c() {
        console.log("hey");
    };
}

let d = b();
d();

// Higher order function
const multiplyBy = num1 => num2 => num1 * num2;
console.log(multiplyBy(4)(5));

function a() {
    let grandpa = "grandpa";
    return function b() {
        let father = "father";
        return function c() {
            let son = "son";
            return `${grandpa}>${father}>${son}`;
        };
    };
}

console.log(a()()());

// Closures (provides memory efficient and Encapsulation)

//1 Memory Efficient

// This is without closure
function heavyDuty(index) {
    const bigArray = new Array(500).fill("@");
    console.log("Created!");
    return bigArray[index];
}

console.log(heavyDuty(444));
console.log(heavyDuty(444));
console.log(heavyDuty(444));

// with closuer
function heavyDuty2() {
    const bigArray = new Array(500).fill("@");
    console.log("Created again!");
    return function(index) {
        return bigArray[index];
    };
}
const getheavyDuty = heavyDuty2();
console.log(getheavyDuty(444));
console.log(getheavyDuty(433));
console.log(getheavyDuty(434));

// prototype inheritance
let dragon = {
    name: "Tanya",
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire!`;
        }
    }
};

let lizard = {
    name: "Kiki",
    fight() {
        return 1;
    }
};

lizard.__proto__ = dragon;

for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop);
    }
}
console.log(lizard.sing());

// Factory functions

function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}

const peter = createElf('peter', 'stone')

console.log(peter.attack())


// Constuctor function

function Elf(name, weapon) {
    this.name = name,
        this.weapon = weapon
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}

const sam = new Elf('peter', 'stone')

console.log(sam.attack())