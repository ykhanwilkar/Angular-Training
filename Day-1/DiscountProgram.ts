//A shopkeeper wants to discount its prices due to the holiday season.Write a typescript function which will take all the prices and provide a discount of 50% on each price.

var discount = (price: number) => price / 2;

var cost = discount(3500);
console.log(cost);
