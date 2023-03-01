var Person = {
    name : "Yamin Hossain",
    age : 23,
    hair : 'Black'
}
// var human = Object.keys(Person);
// console.log(human);
for(var propName in Person){
    // console.log(propName);
    var propValue = Person[propName];
    console.log(propName,propValue); 
}