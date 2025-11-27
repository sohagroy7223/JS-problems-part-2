const products = [
    { name: "watch", price: 100 },
    { name: "sunglass", price: 200 },
    { name: "batch", price: 150 },
    { name: "cap", price: 100 },
];
function getTotalPrice(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;
}
const total = getTotalPrice(products);
console.log("total koroj korlam:", total);
