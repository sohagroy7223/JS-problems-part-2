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
const result = maxPrice(phone);
console.log(result);
