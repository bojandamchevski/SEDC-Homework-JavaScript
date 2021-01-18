let firstDiv = document.getElementById("first");
let childrenFirstDiv = firstDiv.children;
let firstHeading = firstDiv.firstElementChild;
let firstParagraph = firstDiv.lastElementChild;

firstHeading.innerText = "This first heading is changed !"
firstParagraph.innerText = "This first paragraph of the first div is also changed."

let secondDiv = document.getElementsByClassName("anotherDiv")[0];
let childrenSecondDiv = secondDiv.children;
let secondParagraph = secondDiv.firstElementChild;
let firstText = secondDiv.lastElementChild;

secondParagraph.innerText = "This changing stuff looks easy, but it needs a lot of training to master it."
firstText.innerText = "I am just going to add some text to this existing element: " + firstText.innerText + " doing what ever you like to them."

let lastDiv = secondDiv.nextElementSibling;
let childrenLastDiv = lastDiv.children;
let secondHeading = lastDiv.firstElementChild;
let lastHeading = lastDiv.lastElementChild;

secondHeading.innerText = "I'm going to change this as well";
lastHeading.innerText = "This is the last heading of the page!"