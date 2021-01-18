let title = document.getElementById("title");
let result = document.getElementById("result");

function weightInChickens(input) {
    let chickens = input / 0.5;
    title.innerHTML = "";
    title.innerHTML += "<h1> Weight in chickens </h1>";
    result.innerHTML = "";
    result.innerHTML += `<p> Your weight in chickens is: ${chickens} chickens. <p>`
}

weightInChickens(parseFloat(prompt("Enter your weight in kg")));