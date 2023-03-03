//100% array noy

// const product=[
//     {name:"phone",price:1700},
//     {name:"laptop",price:1800},
// ]
// product[0];
// priduct[1];


//const product=[15,57,43];
// const product ={
//     '0' :15,
//     '1' : 57,
//     '2' : 43,
// }

// console.log(product[0]);
// Arguments
function add(num1,num2){
    console.log(num1,num2);
    console.log(arguments);
    console.log("value of index 4 of arguments:",arguments[4]);
}
add(13,14,15,16,17);