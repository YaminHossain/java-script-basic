function ticketDiscount(quantity) {
  let totalCost;
  let restQuantity;
  if (quantity <= 100) {
    totalCost = quantity * 100;
    return totalCost;
  } else if (quantity <= 200) {
    totalCost = 100 * 100;
   restQuantity = quantity - 100;
    totalCost = totalCost + restQuantity * 90;
    return totalCost;
  } 
  else {
    totalCost =100*100;
    totalCost = totalCost + 100 *90;
    restQuantity = quantity - 200;
    totalCost = totalCost+ restQuantity*70;
    return totalCost;
  }
}
console.log("Your total cost is :", ticketDiscount(300));
console.log("Check out for billing!");
