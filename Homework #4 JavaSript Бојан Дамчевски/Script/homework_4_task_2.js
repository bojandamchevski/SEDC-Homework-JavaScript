var numbers = [5, 10, 4, 3, 8];
console.log(`The array length of numbers is ${numbers.length}`);

function functionNumbers(input) {
    var i = 0;
    var sum = 0;
    while (i <= input.length) {
        if (input[i] > 0) {
            sum = sum + input[i];
        }
        i++;
    }
    return sum;
}

var result = functionNumbers(numbers);
console.log(`The sum is ${result}`);

// ---------------------BONUS---------------------

function validateNumber(input) {
    let i = 0;
    while (i < input.length) {
        if (input[i] > 0) {
            console.log(`The number ${input[i]} is a valid number`);
        }
        else {
            console.log(`Error, that is not a number !!!`);
        }
        i++;
    }
}

validateNumber(numbers);