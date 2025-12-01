function multiply(num1, num2) {
    if (typeof num1 !== "number") {
        return "please provide num1 a number";
    } else if (typeof num2 !== "number") {
        return "please provide num2 a number";
    }
    const result = num1 * num2;
    return result;
}

// const result = multiply(8, [6]);
// console.log(result);

// function multiply(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "please provide a number";
//     }
//     const result = a * b;
//     return result;
// }
// const result = multiply(4, 8);
// console.log(result);

function fullName(first, second) {
    if (typeof first !== "string") {
        return "first name should be a string ";
    } else if (typeof second !== "string") {
        return "second name should be a string";
    }

    const full = first + " " + second;
    return full;
}
const result = fullName("sohag", "roy7223");
console.log(result);
