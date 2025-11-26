/*
 * bet = 30 cft
 * sofa = 20 cft
 * chair = 10 cft
 */

function woodQuantity(betQuantity, sofaQuantity, chairQuantity) {
    const parbet = 30;
    const parsofa = 20;
    const parchair = 10;

    const allBet = parbet * betQuantity;
    const allsofa = parsofa * sofaQuantity;
    const allchair = parchair * chairQuantity;
    const totalWood = allBet + allsofa + allchair;
    return totalWood;
}
const totla = woodQuantity(2, 3, 2);
console.log(totla);
