const phone = [
    {
        name: "samsung",
        price: 20000,
        color: "black",
        camera: "108mp",
        battery: "5000ms",
    },
    {
        name: "Redmi",
        price: 29000,
        color: "black",
        camera: "108mp",
        battery: "5000ms",
    },
    {
        name: "oppo",
        price: 15000,
        color: "black",
        camera: "108mp",
        battery: "5000ms",
    },
    {
        name: "iphone",
        price: 100000,
        color: "black",
        camera: "108mp",
        battery: "5000ms",
    },
    {
        name: "realme",
        price: 27000,
        color: "black",
        camera: "108mp",
        battery: "5000ms",
    },
];

function maxPrice(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num.price > max.price) {
            max = num;
        }
    }
    return max;
}
// const result = maxPrice(phone);
// console.log(result);

const man = [
    {
        name: "sohag",
        age: 20,
        class: 12,
        isStudent: true,
        leveIn: "bangladesh",
    },
    {
        name: "sagor",
        age: 28,
        class: "honers final year",
        isStudent: true,
        leveIn: "bangladesh",
    },
    {
        name: "sumon",
        age: 25,
        class: "degree 3rd year",
        isStudent: true,
        leveIn: "bangladesh",
    },
    {
        name: "saikot",
        age: 23,
        class: "diploma in csc",
        isStudent: true,
        leveIn: "bangladesh",
    },
];

function maxAge(years) {
    let age = 0;
    for (const year of years) {
        if (year.age > age) {
            age = year;
        }
    }
    return age;
}
const person = maxAge(man);
console.log(person);
