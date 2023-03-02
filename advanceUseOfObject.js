const mainActor = {
    name :"Yamin",
    age : 22,
    friends : ["anik","udoy","avik","raja"],
    job : function doSum(a,b){
        return a+b;
    }
}
console.log(mainActor);
const result = mainActor.job(2,4);
console.log(result);