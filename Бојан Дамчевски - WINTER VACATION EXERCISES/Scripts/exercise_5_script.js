alert("Exercise 5");

function closest(num1, num2) {
    if (num1 > -1 && num2 > -1) {
        if ((num1 - 100) == (100 - num2)) {
            console.log(`The numbers are equally close to 100. And the numbers are ${num1} and ${num2}.`);
        }
        else if (num1 == num2) {
            console.log(`The numbers are equal. And the numbers are ${num1} and ${num2}.`);
        }
        else if ((num2 - 100) == (100 - num1)) {
            console.log(`The numbers are equally close to 100. And the numbers are ${num1} and ${num2}.`);
        }
        else if (num1 > num2 && num1 <= 100 && num1 > (num2 - 100)) {
            console.log(`The first number is closer to 100. And that number is ${num1}.`);
        }
        else if (num2 > num1 && num2 <= 100 && num2 > (num1 - 100)) {
            console.log(`The second number is closer to 100. And that number is ${num2}.`);
        }
        else if ((num1 - 100) < (100 - num2) && num1 > 100) {
            console.log(`The first number is closer to 100. And that number is ${num1}.`);
        }
        else if ((100 - num1) > (num2 - 100) && num1 < 100) {
            console.log(`The second number is closer to 100. And that number is ${num2}.`);
        }
        else if ((num1 - 100) < (num2 - 100)) {
            console.log(`The first number is closer to 100. And that number is ${num1}.`);
        }
        else if ((num1 - 100) > (num2 - 100)) {
            console.log(`The second number is closer to 100. And that number is ${num2}.`);
        }
        else {
            console.log("ERROR, bad input");
        }
    }
    else {
        alert("No negative values !");
    }
}

closest(parseFloat(prompt("Enter first number")), parseFloat(prompt("Enter second number")));