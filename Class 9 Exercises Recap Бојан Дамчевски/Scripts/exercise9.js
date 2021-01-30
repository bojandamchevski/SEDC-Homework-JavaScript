let input = document.getElementById("textInput");
let button = document.getElementById("button");
let paragraph = document.getElementById("paragraph");

function Pet(name, type, age, isHealthy, owner) {
    this.petName = name,
        this.petType = type,
        this.petAge = age,
        this.petHealth = isHealthy,
        this.petOwner = owner,
        this.isAdopted = function () {
            return !!this.owner
        }
}

function Owner(firstName, lastName, age) {
    this.personFName = firstName,
        this.personLName = lastName,
        this.personAge = age,
        this.personObject = function () {
            paragraph.innerText = ("");
            paragraph.innerText += (` First name: ${this.personFName}  \n`);
            paragraph.innerText += (` Last name: ${this.personLName}  \n`);
            paragraph.innerText += (` Age: ${this.personAge}  \n`);
            if (this.hasOwnProperty("arrayOfPets")) {
                for (let pet of this.arrayOfPets) {
                    paragraph.innerText += (` The pet is ${pet.petName} the ${pet.petType} \n`);
                }
            }
        }
}

let arrayOfOwners = [new Owner("Frank", "Frink", 30), new Owner("Juliana", "Crane", 28), new Owner("John", "Smith", 44)];

let arrayOfPets = [new Pet("Jill", "dog", 3, true, "Frank"),
    new Pet("Greta", "cat", 1, true, "Juliana"),
    new Pet("Bobby", "dog", 4, false, "John"),
    new Pet("Mousy", "hamster", 5, true, "Frank"),
    new Pet("Rupert", "Parrot", 2, true)];

let pOwner;

button.addEventListener("click", function () {
    if (!!input.value) {
        for (let person of arrayOfOwners) {
            if (person.personFName.toLowerCase() === input.value.toLowerCase()) {
                pOwner = person;
                break;
            }
        }
    }
    else {
        paragraph.innerText = ("Please type something");
        return;
    }
    if (!pOwner) {
        paragraph.innerText = ("A owner with that name does not exist");
        return;
    }
    pOwner.arrayOfPets = [];
    for (let pet of arrayOfPets) {
        if (!!pet.petOwner && pet.petOwner.toLowerCase() === pOwner.personFName.toLowerCase()) {
            pOwner.arrayOfPets.push(pet);
        }
    }
    pOwner.personObject();
});