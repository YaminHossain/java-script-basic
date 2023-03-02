const products = [
  { id: 1, name: "Samsung mobile phone", price: 23000 },
  { id: 1, name: "Apple mac book ", price: 23000 },
  { id: 1, name: "Nokia old mobile phone", price: 23000 },
  { id: 1, name: "Samsung tablet", price: 23000 },
  { id: 1, name: "iPhone", price: 23000 },
  { id: 1, name: "Xaiomi android Phone", price: 23000 },
  { id: 1, name: "1+ latest model", price: 23000 },
];
function matchedProduct(products, searchKey) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(searchKey.toLowerCase()) == true) {
      //product={id:1,name:"Samsung mobile phone",price:23000};
      matched.push(product);
    }
    // console.log(product);
  }
  return matched;
}
const result = matchedProduct(products, "phone");
console.log(result);
