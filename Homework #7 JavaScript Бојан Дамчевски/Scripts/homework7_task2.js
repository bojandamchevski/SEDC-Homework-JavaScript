let htmlbody = document.getElementsByTagName("body")[0];
let mainDiv = document.createElement("div");
htmlbody.appendChild(mainDiv);
let titleDiv = document.createElement("div");
mainDiv.appendChild(titleDiv);
let heading1 = document.createElement("h1");
titleDiv.appendChild(heading1);

heading1.innerText = "";
heading1.innerText += "Homework 7 task 2";

let contentDiv = document.createElement("div");
mainDiv.appendChild(contentDiv);
let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "inputName");
inputName.setAttribute("id", "name");
inputName.setAttribute("placeholder","Name of the book");
contentDiv.appendChild(inputName);
let inputAuthor = document.createElement("input");
inputAuthor.setAttribute("type", "text");
inputAuthor.setAttribute("name", "inputKind");
inputAuthor.setAttribute("id", "kind");
inputAuthor.setAttribute("placeholder","Name of the author");
contentDiv.appendChild(inputAuthor);
let inputStatus = document.createElement("input");
inputStatus.setAttribute("type", "text");
inputStatus.setAttribute("name", "inputStatus");
inputStatus.setAttribute("id", "status");
inputStatus.setAttribute("placeholder","yes/no");
contentDiv.appendChild(inputStatus);
let button = document.createElement("input");
button.setAttribute("type", "button");
button.setAttribute("id", "button");
button.setAttribute("name", "button");
button.setAttribute("value", "submit");
contentDiv.appendChild(button);
let paragraph = document.createElement("p");
contentDiv.appendChild(paragraph);


function Book(inputName, inputAuthor, inputStatus) {
    this.title = inputName.value;
    this.author = inputAuthor.value;
    this.readingStatus = inputStatus.value;
    this.status = function () {
        // if (inputStatus.value === "yes") {
        //     paragraph.innerHTML = "";
        //     paragraph.innerHTML += `<b>Already read ${inputName.value} by ${inputAuthor.value}.</b>`;
        //     paragraph.innerHTML += `<b>${inputStatus.value}</b>`
        //     return true;
        // }
        // else {
        //     paragraph.innerHTML = "";
        //     paragraph.innerHTML += `<b>You still need to read ${inputName.value} by ${inputAuthor.value}.</b>`;
        //     return false;
        // }
    }
}

function print() {
    let bookA = new Book(inputName, inputAuthor, inputStatus);
    if (inputStatus.value === "yes") {
        paragraph.innerHTML = "";
        paragraph.innerHTML += `<b>Already read ${inputName.value} by ${inputAuthor.value},\n</b>`;
        paragraph.innerHTML += `<b> ${inputStatus.value} i have!</b>`;
        console.log(bookA);
        console.log(typeof(bookA));
        return true;
    }
    else {
        paragraph.innerHTML = "";
        paragraph.innerHTML += `<b>You still need to read ${inputName.value} by ${inputAuthor.value}.\n</b>`;
        // paragraph.innerHTML += `<b>${inputStatus.value}</b>`
        return false;
    }
}

button.addEventListener("click", function () {
    // print(inputName, inputAuthor, inputStatus);
    let result = print(inputName, inputAuthor, inputStatus);
    console.log(result);
});

// THIS IS ANOTHER WAY, AND THE CORRECT WAY

// function Book(inputName, inputAuthor, inputStatus) {
//     this.title = inputName.value;
//     this.author = inputAuthor.value;
//     this.readingStatus = inputStatus;
//     this.status = function () {
//         if (this.readingStatus === "yes") {
//             console.log(`Yes, I have read the book ${inputName} from ${inputAuthor}`);
//             return true;
//         }
//         else {
//             console.log(`No, I have not read the book ${inputName} from ${inputAuthor}`);
//             return false;
//         }
//     }
// }

// let bookA = new Book(prompt("Enter the name of the book"), prompt("Enter the author of the book"), prompt("Have you read it yes/no"));
// let result = bookA.status();
// console.log(result);
// console.log(typeof(bookA)); // it's an object
