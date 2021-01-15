var arr = ["hello", 2, true, 4, 2, 8,,,, "bye", 12, 15, false];
// var arr = [2, 4, 2, 8, 12, 15];

function maxMinSum(input) {
    let max = -Infinity;
    let min = +Infinity;
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (input[i] > max && input[i] !== "string" && input[i] !== true &&input[i] !== false && input[i] !== null) {
            max = input[i];
        }
        if (input[i] < min && input[i] !== "string" && input[i] !== true &&input[i] !== false && input[i] !== null) {
            min = input[i]
        }
    }
    sum = min + max;
    console.log(`The min number is ${min} and the max number is ${max}`);
    console.log(`The sum is ${sum}`);
}

maxMinSum(arr);

// ---------------MORE AND BETTER WAYS---------------------

// let arrayNumbers = [3, 1, true, 2, 4, "Hello", 2, 5, false, 5, 3, "Text", 5, 7, 5, null, 8, 6, 99,];

// function sumOfMinAndMaxNum1(input) {
//     let sum = 0;
//     let maxNum = -Infinity;
//     let minNum = Infinity;
//     for (let i = 0; i < input.length; i++) {
//         if (typeof (input[i]) === 'number') {
//             if (input[i] > maxNum) {
//                 maxNum = input[i];
//             }
//             if (input[i] < minNum) {
//                 minNum = input[i];
//             }
//         }
//     }
//     sum = maxNum + minNum;
//     console.log(`The max in ${maxNum}, the min is ${minNum} and their sum is ${sum}`);
// }

// sumOfMinAndMaxNum1(arrayNumbers);

// function sumOfMinAndMaxNum2(input) {
//     let i = 0;
//     let sum = 0;
//     let maxNum = -Infinity;
//     let minNum = Infinity;
//     while (i < input.length) {
//         if (typeof (input[i]) === 'number') {
//             if (input[i] > maxNum) {
//                 maxNum = input[i];
//             }
//             if (input[i] < minNum) {
//                 minNum = input[i];
//             }
//         }
//         i++;
//     }
//     sum = maxNum + minNum;
//     console.log(`The max in ${maxNum}, the min is ${minNum} and their sum is ${sum}`);
// }

// sumOfMinAndMaxNum2(arrayNumbers);

// function sumOfMinAndMaxNum3(input) {
//     let sum = 0;
//     let maxNum = -Infinity;
//     let minNum = Infinity;
//     for (let i of input) {
//         if (typeof (i) === 'number') {
//             if (i > maxNum) {
//                 maxNum = i;
//             }
//             if (i < minNum) {
//                 minNum = i;
//             }
//         }
//         i++;
//     }
//     sum = maxNum + minNum;
//     console.log(`The max in ${maxNum}, the min is ${minNum} and their sum is ${sum}`);
// }

// sumOfMinAndMaxNum3(arrayNumbers);
