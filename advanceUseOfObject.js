const actor={
    name : "Sakib Khan",
    isSingle : true,
    friends:["abul","kabul"],
    movies : [{name:'Movie-1',year:2001},{name:'Movie-2',year:2005}],
    car:{
        brand : "Tesla",
        price :1700000,
        manufacturer :{
            name : "Tesla INC.",
            CEO : "Elon Mask"
        }
    },
    act: function(){//function name is not necessary
        console.log("This is a function");
    }
}
// console.log(actor.friends);
// console.log(actor.car);
//console.log(actor.act);//this will return the type of the property
actor.act();
console.log(actor);
console.log(actor.friends[0]);
console.log(actor.movies[0]);
console.log(actor.movies[0].name);
console.log(actor.car.brand);
console.log(actor.car.manufacturer.name);
