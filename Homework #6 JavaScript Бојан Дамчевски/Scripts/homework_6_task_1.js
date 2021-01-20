let firstDiv = document.getElementById("myDiv");
let secondDiv = document.getElementById("content");
let childrenFristDiv = firstDiv.children;

let nameInput = firstDiv.children[0];
let lastNameInput = firstDiv.children[2];
let button = firstDiv.children[4];

function printDetails() {
    if (nameInput.value.length < 3 || lastNameInput.value.length < 3) {
        secondDiv.innerHTML += "<p> Please enter more than 3 characters. </p>";
    }
    else {
        alert(`The full name is: ${nameInput.value} ${lastNameInput.value}`);
        secondDiv.innerHTML = `<p>Hello and good day from ${nameInput.value} ${lastNameInput.value} !</p>`
    }
}

button.addEventListener("click", function () {
    printDetails(nameInput, lastNameInput);
});

secondDiv.addEventListener("mouseover", function () {
    secondDiv.innerText = "";
});