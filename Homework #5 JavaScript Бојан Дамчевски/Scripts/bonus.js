let nameRecipe = prompt("Name your recipe");
let numberIngredients = parseInt(prompt("How many ingredients do we need ?"));
console.log(numberIngredients);
let headingElement = document.getElementById("maindiv");
headingElement.innerHTML += `<h1>${nameRecipe}</h1> <h2>${nameRecipe}</h2> <h3>${nameRecipe}</h3> <h4>${nameRecipe}</h4> <h5>${nameRecipe}</h5> <h6>${nameRecipe}</h6>`


function recipe(number) {
    let ingredients = [];
    let i = 0;
    let myTable = document.createElement("table");
    let tableBody = document.createElement("tbody");
    headingElement.appendChild(myTable);
    myTable.appendChild(tableBody);
    myTable.setAttribute("border", "2");
    while (i < number) {
        let tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);
        let tableData = document.createElement("td");
        tableRow.appendChild(tableData);
        ingredients.push(prompt("What do we need ? (Enter one by one)"));
        tableData.innerText += ingredients[i];
        i++;
    }
    return ingredients;
}

let funcResult = recipe(numberIngredients);
console.log(funcResult);
