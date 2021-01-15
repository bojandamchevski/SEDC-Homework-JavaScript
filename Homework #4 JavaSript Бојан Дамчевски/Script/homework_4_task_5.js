var arr = ["hello", 2, true, 4, 2, 8,,,, "bye", 12, 15, false];
// var arr = [2, 4, 2, 8, 12, 15];

function maxMinSum(input) {
    let max = -Infinity;
    let min = +Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (input[i] > max && input[i] !== "string" && input[i] !== true &&input[i] !== false && input[i] !== null) {
            max = input[i];
            var sum = 0;
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