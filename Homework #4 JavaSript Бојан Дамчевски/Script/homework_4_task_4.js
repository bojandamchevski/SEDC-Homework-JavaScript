var arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function oddEvenLoopFunction(input) {
    var numbers = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {
            numbers = numbers + input[i] + "\n";
        }
        if (input[i] % 2 != 0) {
            numbers = numbers + input[i] + "  ";
        }
    }
    console.log(numbers);
}

oddEvenLoopFunction(arrNumbers);

// ---------------MORE AND BETTER WAYS---------------------

// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function oddEvenNumbers1(input) {
//     let i = 0;
//     let emptyString = "";
//     while (i < input.length) {
//         if (input[i] % 2 == 0) {
//             emptyString += `${input[i]} \n`
//         }
//         else{
//             emptyString +=`${input[i]} `
//         }
//         i++;
//     }
//     console.log(emptyString);
// }

// oddEvenNumbers1(arrayNumbers);

// function oddEvenNumbers2(input) {
//     let emptyString = "";
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] % 2 == 0) {
//             emptyString += `${input[i]} \n`
//         }
//         else {
//             emptyString += `${input[i]} `
//         }
//     }
//     console.log(emptyString);
// }

// oddEvenNumbers2(arrayNumbers);

// function oddEvenNumbers3(input) {
//     let emptyString = "";
//     for (let i of input) {
//         if (i % 2 == 0) {
//             emptyString += `${i} \n`
//         }
//         else{
//             emptyString +=`${i} `
//         }
//         i++;
//     }
//     console.log(emptyString);
// }

// oddEvenNumbers3(arrayNumbers);