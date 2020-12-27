var year = prompt("Enter year of birth");
console.log("The year is");
console.log(year);

var a = (year-4)%12;

if(a===0){
    console.log("Rat");
}
else if(a===1){
    console.log("Ox");
}
else if(a===2){
    console.log("Tiger");
}
else if(a===3){
    console.log("Rabbit");
}
else if(a===4){
    console.log("Dragon");
}
else if(a===5){
    console.log("Snake");
}
else if(a===6){
    console.log("Horse");
}
else if(a===7){
    console.log("Goat");
}
else if(a===8){
    console.log("Monkey");
}
else if(a===9){
    console.log("Rooster");
}
else if(a===10){
    console.log("Dog");
}
else{
    console.log("Pig");
}