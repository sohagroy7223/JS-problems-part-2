function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
function subtract(num1, num2) {
    const odd = num1 - num2;
    return odd;
}
function multiply(num1, num2) {
    const gun = num1 * num2;
    return gun;
}
function divide(num1, num2) {
    const vag = num1 / num2;
    return vag;
}

function calculator(a, b, operation) {
    if (operation === "add") {
        const result = add(a, b);
        return result;
    } else if (operation === "subtract") {
        return subtract(a, b);
    } else if (operation === "multiply") {
        const result = multiply(a, b);
        return result;
    } else if (operation === "divide") {
        const result = divide(a, b);
        return result;
    } else {
        (" only 'add' 'subtract' 'multiply' and 'divide' allowed");
    }
}
const result = calculator(4, 9, "divide");
console.log(result);
