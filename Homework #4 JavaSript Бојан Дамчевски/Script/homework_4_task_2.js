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

// ---------------MORE AND BETTER WAYS---------------------

// var numbers = [1, 2, 3, 4, 5,];

// function sumOfNumbers(input) {
//     let i = 0;
//     let sum = 0;
//     while (i < input.length) {
//         sum += input[i];
//         i++;
//     }
//     console.log(`The sum is ${sum}`);
// }

// sumOfNumbers(numbers);


// function sumOfNumbers(input){
//     let sum = 0;
//     for(let i = 0; i < input.length; i++){
//         sum += input[i]; 
//     }
//     console.log(`The sum of the five numbers is ${sum}`);
// }

// sumOfNumbers(numbers);


// function sumOfNumbers(input){
//     let sum = 0;
//     for (let i of input){
//         sum += i;
//         i++;
//     }
//     console.log(`THE RESULT IS ${sum}`);
// }

// sumOfNumbers(numbers);

// function validateNumber(input) {
//     for (let i = 0; i < input.length; i++) {
//         if (typeof (input[i]) === 'number') {
//             console.log(`The number ${input[i]} is valid`);
//         }
//         else {
//             console.log(`This ${input[i]} is not a number!`);
//         }
//     }
// }

// validateNumber(numbers);