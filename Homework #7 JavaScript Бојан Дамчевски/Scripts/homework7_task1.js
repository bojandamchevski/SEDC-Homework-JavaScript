let htmlbody = document.getElementsByTagName("body")[0];
let mainDiv = document.createElement("div");
htmlbody.appendChild(mainDiv);
let titleDiv = document.createElement("div");
mainDiv.appendChild(titleDiv);
let heading1 = document.createElement("h1");
titleDiv.appendChild(heading1);

heading1.innerText = "";
heading1.innerText += "Homework 7 task 1";

let contentDiv = document.createElement("div");
mainDiv.appendChild(contentDiv);
let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "inputName");
inputName.setAttribute("id", "name");
inputName.setAttribute("placeholder","Name of the animal");
contentDiv.appendChild(inputName);
let inputKind = document.createElement("input");
inputKind.setAttribute("type", "text");
inputKind.setAttribute("name", "inputKind");
inputKind.setAttribute("id", "kind");
inputKind.setAttribute("placeholder","Name of the kind of animal");
contentDiv.appendChild(inputKind);
let button = document.createElement("input");
button.setAttribute("type", "button");
button.setAttribute("id", "button");
button.setAttribute("name", "button");
button.setAttribute("value", "submit");
contentDiv.appendChild(button);
let paragraph = document.createElement("p");
contentDiv.appendChild(paragraph);


function Animal(inputName, inputKind) {
    this.animalName = inputName.value;
    this.animalKind = inputKind.value;
    this.speak = function () {
        // console.log(`Hey this is a ${inputName.value} and it's a ${inputKind.value}`);
        // paragraph.innerHTML = "";
        // paragraph.innerHTML += `<b>Hey this is a ${inputName.value} and it's name is ${inputKind.value}. ${inputKind.value} the ${inputName.value} says: Hello there!</b>`;
    }
}

function print() {
    let animalA = new Animal(inputName, inputKind);
    paragraph.innerHTML = "";
    paragraph.innerHTML += `<b>Hey this is a ${inputKind.value} and it's name is ${inputName.value}. ${inputName.value} the ${inputKind.value} says: Hello there!</b>`;
    console.log(animalA);
    console.log(typeof(animalA));
}

button.addEventListener("click", function () {
    print(inputName, inputKind);
});

// THIS IS ANOTHER WAY, AND THE CORRECT WAY

// function Animal(inputName, inputKind){
//     this.animalName = inputName;
//     this.animalKind = inputKind;
//     this.speak = function () {
//        console.log(`Hey this is a ${inputKind} and it's name is ${inputName}
//        ${inputName} the ${inputKind} says: Hello there!`);
//     }
// }

// let animalA = new Animal(prompt("Enter name"), prompt("Enter kind"));
// animalA.speak();
// console.log(typeof(animalA)); // it's an object