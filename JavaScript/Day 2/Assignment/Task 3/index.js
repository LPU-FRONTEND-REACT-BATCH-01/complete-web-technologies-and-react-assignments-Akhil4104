let price = Number(prompt("Enter the price of the item:"));
function calculateDiscount(price) {
    if (price > 2000 && price <= 6000) {
        return 15;
    }
    else if(price>6000) {
        return 25;
    }
    else {
        return 0;
    }
}
let discount = calculateDiscount(price);
if (discount > 0) {
    console.log("You got a discount of " + discount + "% and the total price is " + (price - (price * discount / 100)));
}
else {
    console.log("No discount applied. Total price is " + price);
}