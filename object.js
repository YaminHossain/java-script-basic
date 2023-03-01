var Car = {
    brand : 'Audi',
    price : 2000000,
    color : 'black'
};
// console.log(Car);
// console.log(Car.brand);
// Car.brand = 'TOYOTA';
// console.log(Car);
var allProperties = Object.keys(Car);
console.log(allProperties);
var allPropertiesValue = Object.values(Car);
console.log(allPropertiesValue);
