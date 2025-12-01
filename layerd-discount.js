/**
 * 1st 100 price--100
 * 101 to 200price--90
 * avobe 201price--70
 * */

function layerdDiscountTotal(quantity) {
    const first100price = 100;
    const second100price = 90;
    const avobe200price = 70;

    if (quantity <= 100) {
        const total = quantity * first100price;
        return total;
    } else if (quantity <= 200) {
        const firsttotla = 100 * first100price;
        const obosisto = quantity - 100;
        const obosistoTotal = obosisto * second100price;
        const total = firsttotla + obosistoTotal;
        return total;
    } else {
        const firsttotla = 100 * first100price;
        const secondtotal = 100 * second100price;
        const bakibobsisto = quantity - 200;
        const remainingTotal = bakibobsisto * avobe200price;
        const total = firsttotla + secondtotal + remainingTotal;
        return total;
    }
}
const result = layerdDiscountTotal(200);
console.log(result);
