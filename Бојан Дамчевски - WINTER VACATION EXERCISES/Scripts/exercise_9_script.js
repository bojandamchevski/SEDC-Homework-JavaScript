alert("Exercise 9");

function divisible(num){
    if(num%3==0){
        console.log(`The number is divisible with 3 and it's ${num}`);
    }
    else{
        console.log(`The number is not divisible with 3 and it's ${num}`);
    }
}

divisible(parseFloat(prompt("Enter number to check if it's divisible")));