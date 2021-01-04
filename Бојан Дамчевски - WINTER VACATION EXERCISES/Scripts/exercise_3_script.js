alert("Exercise 3");

function rectanglePerimeter(width, height) {
    var result = (width + height) * 2;
    return result;
}

var perimeter = rectanglePerimeter(100, 50);
console.log(`The perimeter of the rectangle is ${perimeter}.`);



// -------------------------Another way-------------------------



function recPer(a, b) {
    var p = (a + b) * 2;
    console.log("The perimeter is " + p + " with sides of " + a + " and " + b + ".");
}

recPer(parseFloat(prompt("Enter side 1 of rectangle")), parseFloat(prompt("Enter side 2 of rectangle")));



// -------------------------Another way-------------------------


var side1 = parseFloat(prompt("Enter side 1"));
var side2 = parseFloat(prompt("Enter side 2"));
var perOfRec = (side1 + side2) * 2;
console.log(`The perimeter is ${perOfRec} with side 1 of ${side1} and side 2 of ${side2}.`);