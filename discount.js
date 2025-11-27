/**
 * 100 price ---->100
 * 101 to 200---->80
 * above 200 ------>50
 * */
function discount(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    } else if (quantity <= 200) {
        const total = quantity * 80;
        return total;
    } else {
        const total = quantity * 50;
        return total;
    }
}
const result = discount(210);
console.log(result);
