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