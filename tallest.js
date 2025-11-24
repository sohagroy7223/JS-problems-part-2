// max number in array function****

const heights = [60, 66, 69, 67, 70, 76, 72];
function maxNumber(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const max = maxNumber(heights);
// console.log(max);

// min number in array function*****

function minNumber(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const min = [68, 90, 88, 78, 80, 72, 63, 89];
const result = minNumber(min);
// console.log(result);

// for loop operation****

function maxNumber(numbers) {
    let max = numbers[0];
    for (n = 0; n < numbers.length; n++) {
        if (numbers[n] > max) {
            max = numbers[n];
        }
    }
    return max;
}
const max1 = [34, 56, 78, 90, 46, 50];
const results = maxNumber(max1);
console.log(results);
