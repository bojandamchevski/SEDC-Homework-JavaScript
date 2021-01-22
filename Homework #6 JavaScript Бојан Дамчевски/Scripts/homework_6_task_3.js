let myDiv = document.getElementById("myDiv");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("button");


// function details() {
//     myDiv.innerHTML += `<p>The details you entered are:</p><p>First name: ${firstName.value}</p><p> Last name: ${lastName.value}</p><p>E-mail: ${email.value}</p><p>Password: ${password.value}</p>`;
// }

function details() {
    let fName = firstName.value;
    let lName = lastName.value;
    let mail = email.value;
    let pass = password.value;
    printDetails(fName, lName, mail, pass);
}

function printDetails(fName, lName, mail, pass) {
    myDiv.innerHTML += `<p>The details you entered are:</p><p>First name: ${fName}</p><p> Last name: ${lName}</p><p>E-mail: ${mail}</p><p>Password: ${pass}</p>`;
}

button.addEventListener("click", function () {
    // details(firstName, lastName, email, password);
    details();
})
