let inputName = document.getElementById("firstname");
let inputLastName = document.getElementById("lastname");
let inputAge = document.getElementById("age");
let button = document.getElementById("button");
let list = document.createElement("ul");
let mainDiv = document.getElementById("mainDiv");
mainDiv.appendChild(list);

function Student(inputName, inputLastName, inputAge) {
    this.name = inputName;
    this.surename = inputLastName;
    this.age = inputAge;
}

function printStudents() {
    let studentArray = [];
    let studentA = new Student(inputName, inputLastName, inputAge);
    studentArray.push(studentA);
    for(let i = 0; i < 1; i++){
        list.innerHTML += `<li>${inputName.value} ${inputLastName.value}</li>`;
    }
}

button.addEventListener("click", function () {
    printStudents(inputName, inputLastName, inputAge);
})