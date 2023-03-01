var number=[25,30,50,100,20,14,188,200,4];
for(var i = 0;i<number.length;i++){
    if(number[i]>50){
        continue;
    }
    console.log(number[i]);
    console.log('Hello World'+' '+i);
}