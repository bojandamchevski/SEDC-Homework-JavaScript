alert("Exercise 8");

function twoNumbers(a,b){
    if((a>=30 || b >= 30) && ((a+b)==50)){
        console.log(`True, the sum of the numbers is 50 and one of them is above 30, the numbers are ${a} and ${b}.`);
    }
    else if(a>=30 || b >= 30){
        console.log(`True, one of the numbers is greater than 30 and they are ${a} and ${b}.`);
    }
    else if((a+b)==50){
        console.log(`True, the sum of the numbers is 50 and they are ${a} and ${b}.`);
    }
    else{
        console.log("Number lower than 30 or sum not equal to 50");
    }
}

twoNumbers(parseFloat(prompt("Enter first number")),parseFloat(prompt("Enter second number")));