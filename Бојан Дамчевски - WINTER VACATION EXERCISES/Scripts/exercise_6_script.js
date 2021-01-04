alert("Exercise 6");

var number1 = parseFloat(prompt("Enter first number"));
var number2 = parseFloat(prompt("Enter second number"));

if(number1 !== number2){
    var sum = number1 + number2;
    console.log(`The sum of the two numbers is ${sum}`);
}
else{
    var sum1 = (number1+number2)*3;
    console.log(`Because the numbers are the same, the sum of the two of them is tripled and it is ${sum1}`);
}