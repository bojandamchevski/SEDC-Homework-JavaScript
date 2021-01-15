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