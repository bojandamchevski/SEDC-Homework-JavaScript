let paragraph = document.getElementById("paragraph");

function print() {
    // let arrayNumbers = [];
    let arrayNumbers = [2, 3, 4, 6, 8, 5, 7, 8, 14, 12];
    let emptyString1 = "";
    let emptyString2 = "";
    let emptyArray = [];
    // for (let num = 1; num <= 10; num++) {
    //     arrayNumbers.push(num);
    // }
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (isNaN(arrayNumbers.length)) {
            paragraph.innerText = "This is not an array with numbers";
        }
        else {
            if (arrayNumbers[i] % 2 == 0 && arrayNumbers[i-1] % 2 == 0) {
                emptyString1 = "-";
                emptyString2 = `${arrayNumbers[i]}`;
                emptyArray.push(emptyString1, emptyString2);
            }
            else {
                emptyArray.push(arrayNumbers[i]);
            }
        }
    }
    paragraph.innerText = `${emptyArray}`;
    console.log(emptyArray);
}

print();