var person = {
    name : "Yamin Hossian",
    age : 23,
    hair : 'black'
}
var propertyNames = Object.keys(person);
// console.log(propertyNames);
// [ 'name', 'age', 'hair' ]
for(var i=0;i<propertyNames.length;i++){
    propertyValue = person[propertyNames[i]];
    console.log(propertyNames[i],propertyValue);
}