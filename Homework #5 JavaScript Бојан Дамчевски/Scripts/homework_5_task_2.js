let parentDiv = document.getElementById("parent");
let childrenParentDiv = parentDiv.children;
let titleDiv = parentDiv.firstElementChild;
let contentDiv = parentDiv.children[1];
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumOfNumbers(input, element1, element2) {
    let epmtyString = "";
    let sum = 0;
    element1.innerHTML = "";
    element1.innerHTML += "<h1> SUM AND ARRAY OF NUMBERS  </h1>";
    element2.innerHTML = "";
    element2.innerHTML += "<ul>";
    for (let i = 0; i < input.length; i++) {
        element2.innerHTML += `<li> ${input[i]} </li>`;
        if (input[i] == input[input.length - 1]) {
            epmtyString += `${input[i]}`;
        }
        else {
            epmtyString += `${input[i]}+`;
        }
        sum += input[i];
    }
    element2.innerHTML += "</ul>";
    element2.innerHTML += `<p> The equation is : ${epmtyString} and the sum is: ${sum} </p>`;
}

sumOfNumbers(arrayNumbers, titleDiv, contentDiv);