var firstName = ["Bob", "Jill", "Michael", "John"];
var secondName = ["Trump", "Mckain", "Douglas", "Smith"];

function fullName(fName,lName) {
    let i = 0;
    let num = 1;
    let one = "  ";
    let full = [];
    while (i < fName.length && i < lName.length){
        if (fName[i] !== null && lName[i] !== null) {
            one = `${num}. ${fName[i]} ${lName[i]} `;
            num++;
            full.push(one);
        }
        i++;
    }
    console.log(full);
}

fullName(firstName,secondName);


// ---------------ANOTHER AND BETTER WAY---------------------


// let firstNames = ["Chandler", "Joey", "Monica", "Ross", "Rachel", "Phoebe"];
// let lastNames = ["Bing", "Tribbiani", "Geller", "Geller", "Green", "Buffay"];

// function fullName(fName, lName) {
//     let num = 1;
//     let i = 0;
//     let emptyString = "";
//     let emptyArray = [];
//     while (i < fName.length && i < lName.length) {
//         emptyString = `${num}. ${fName[i]} ${lName[i]}`
//         emptyArray.push(emptyString);
//         num++;
//         i++;
//     }
//     console.log(emptyArray);
// }

// fullName(firstNames,lastNames);