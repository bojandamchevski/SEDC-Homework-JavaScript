var textArray = ["Hello ", "there ", "students ", "of ", "SEDC"];

function bigString(input) {
    let i = 0;
    while (i < input.length) {
        console.log(textArray.join (" "));
        i++;
    }
}
bigString(textArray);

// ---------------MORE AND BETTER WAYS---------------------

// let arrayString = ["Hello", " from", " SEDC.", " Add more text if you want"];

// function oneString1(input) {
//     let emptyString = "";
//     for (let i = 0; i < input.length; i++) {
//         emptyString += input[i]
//     }
//     console.log(emptyString);
// }

// oneString1(arrayString);

// function oneString2(input) {
//     let emptyString = "";
//     let i = 0;
//     while (i < input.length) {
//         emptyString += input[i]
//         i++;
//     }
//     return emptyString;
// }

// var result = oneString2(arrayString);
// console.log(`The string is ${result}`);

// function oneString3(input) {
//     let emptyString = "";
//     for (let i of input){
//         emptyString += i;
//         i++;
//     }
//     return emptyString;
// }

// let result1 = oneString3(arrayString);
// console.log(`The string is: ${result1}`);