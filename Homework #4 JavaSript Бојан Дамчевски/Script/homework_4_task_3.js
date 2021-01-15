var textArray = ["Hello ", "there ", "students ", "of ", "SEDC"];

function bigString(input) {
    let i = 0;
    while (i < input.length) {
        console.log(textArray.join (" "));
        i++;
    }
}
bigString(textArray);