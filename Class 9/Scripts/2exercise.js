function numbers(input) {
    if (isNaN(input)) {
        console.log("Enter a valid number");
    }
    else{
        if (input >= 0) {
            console.log(`The number ${input} is positive`);
        }
        else{
            console.log(`The number ${input} is negative`);
        }
        if (input % 2 == 0) {
            console.log(`The number ${input} is even`);
        }
        else{
            console.log(`The number ${input} is odd`);
        }
    }
}

numbers(parseInt(prompt("Enter number")));