const products = [
    { name: "watch", price: 100, quantity: 3 },
    { name: "sunglass", price: 200, quantity: 5 },
    { name: "batch", price: 150, quantity: 4 },
    { name: "cap", price: 100, quantity: 2 },
];

function totalProductPrice(products) {
    let total = 0;
    for (const product of products) {
        const totalProductsCost = product.price * product.quantity;
        total = total + totalProductsCost;
    }
    return total;
}
const result = totalProductPrice(products);
console.log("total koraj korlam", result);
