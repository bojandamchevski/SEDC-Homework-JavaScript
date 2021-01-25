let inputText = document.getElementById("textbox");
let button = document.getElementById("button");
let mainBody = document.getElementsByTagName("body")[0];
let para = document.createElement("p");
mainBody.appendChild(para);

function Pets(pname, ptype, page, phealth, padopt) {
    this.petName = pname,
        this.petType = ptype,
        this.petAge = page,
        this.petHealth = phealth,
        this.petAdopt = padopt;
}
function PetOwner(fname, lname, age) {
    this.ownerName = fname,
        this.ownerLastName = lname,
        this.ownerAge = age;
}


let arrayPets = [petA, petB, petC, petD, petE];
let arrayOwner = [ownerA, ownerB, ownerC];

let ownerA = new PetOwner("John", "Smith", "39");
let ownerB = new PetOwner("Frank", "Doe", "28");
let ownerC = new PetOwner("Juliana", "McCain", "50");

let petA = new Pets("Jackie", "dog", "2", true, ownerA);
let petB = new Pets("Rollo", "dog", "3", true, ownerA);
let petC = new Pets("Katy", "cat", "5", false, ownerB);
let petD = new Pets("July", "hamster", "1", true, ownerC);
let petE = new Pets("Frankie", "dog", "2", true, ownerA);

function print(input, arrayO, arrayP) {
    for (let i = 0; i < arrayO.length; i++) {
        for (let j = 0; j < arrayP.length; j++) {
            if (input == arrayO[i]) {
                if () {
                    para.innerHTML = "";
                    para.innerHTML += `<b>The owner is ${arrayO[i]} and his pets are ${arrayP[i]}</b>`;
                }
            }
            else {
                para.innerHTML = "";
                para.innerHTML += "<b>Bad input</b>";
            }
        }
    }
}


button.addEventListener("click", function () {
    print(inputText.value, arrayOwner, arrayPets);
})