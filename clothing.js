/*
 * Shirt price--->600
 * pant price--->500
 * Shoe price--->900
 * */

function clothQuantity(shirtQuantity, pantQuantity, shoeQuantity) {
    const shirtPrice = 600;
    const pantPrice = 500;
    const shoePrice = 900;

    const shirt = shirtPrice * shirtQuantity;
    const pant = pantPrice * pantQuantity;
    const shoe = shoePrice * shoeQuantity;
    const allPrice = shirt + pant + shoe;
    return allPrice;
}
const totalPrice = clothQuantity(2, 1, 2);
console.log(totalPrice);
