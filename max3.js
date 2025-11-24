// // normal ****

// const sagor = 78;
// const sojib = 84;
// const allok = 98;
// if (sagor > sojib && sagor > allok) {
//     console.log("sagor is topper in marks:", sagor);
// } else if (sojib > allok && sojib > sagor) {
//     console.log("sojib is get max number in the class:", sojib);
// } else {
//     console.log("allok is boss in the class:", allok);
// }

// function****
function maxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("number1 is the big number:", num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log("number2 is the top number:", num2);
    } else {
        console.log("number3 is the max number:", num3);
    }
}
maxNumber(87, 90, 95);
