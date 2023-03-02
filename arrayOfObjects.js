const phones = [
  { name: "Samsung", color: "Black", price: 57000 },
  { name: "apple", color: "Black", price: 82000 },
  { name: "Xaomi", color: "Black", price: 35000 },
  { name: "Nokia", color: "Black", price: 47000 },
];
 phones.push  ({ name: "Realme", color: "Black", price: 17000 });
 var myPhone=cheapestPhone(phones);
console.log("Price for my phone will be : ",myPhone," taka");
// console.log(phones);
function cheapestPhone(phones){
    cheapest=phones[0].price;
    let phone;
    for(let i=0;i<phones.length;i++){
        phone = phones[i];
        if(phone.price<cheapest){
            cheapest =phone.price;
        }
    }
    return cheapest;
}