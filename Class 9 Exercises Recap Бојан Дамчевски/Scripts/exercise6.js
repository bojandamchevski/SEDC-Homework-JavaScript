let text1 = document.getElementById("textBox");
let text2 = document.getElementById("textBox1");
let button = document.getElementById("button");
let paragraph = document.getElementById("paragraph");

function calculateArea(sideA, sideB) {
    let area;
    if (sideA == "" || sideB == "") {
        alert("Enter the values!");
    }
    else if (isNaN(sideA) || isNaN(sideB)) {
        alert("Enter valid values!");
    }
    else {
        area = sideA * sideB;
        paragraph.innerHTML += `<b>The area is <i>${area}</i></b>`;
    }
}

function printPerimeter(side1, side2) {
    let perimeter;
    perimeter = 2 * side1 + 2 * side2;
    paragraph.innerHTML = `<b>The perimeter is <i>${perimeter}</i></b>`;
    paragraph.style.color = "blue";
    paragraph.style.backgroundColor = "cyan";
    paragraph.style.fontSize = "25px";
}

paragraph.addEventListener("mouseover", function () {
    printPerimeter(text1.value, text2.value);
});

button.addEventListener("click", function () {
    calculateArea(text1.value, text2.value);
});

paragraph.addEventListener("mouseout",function(){
    text1.value = "";
    text2.value = "";
    paragraph.innerHTML = "";
});

//----------WITH JQUERY----------------------------------------------------

// $(document).ready(function () {
//     let input1 = $("#textBox");
//     let input2 = $("#textBox1");
//     let button = $("#button");
//     let paragraph = $("#paragraph");

//     function calculateAreaOfRectangle(side1, side2) {
//         let area = 0;
//         if (isNaN(side1) || isNaN(side2)) {
//             paragraph.text("");
//             paragraph.text("Invalid input").css("color", "red");
//         }
//         else if (!side1 || !side2) {
//             paragraph.text("");
//             paragraph.text("Please enter a number").css("color", "red");
//         }
//         else {
//             area = side1 * side2;
//             paragraph.text("");
//             paragraph.text(`The area is ${area}`).css("color", "green");
//         }
//     }

//     function calculatePerimeterOfRectangle(a, b) {
//         let perimeter = 0;
//         if (isNaN(a) || isNaN(b)) {
//             paragraph.text("");
//             paragraph.text("Invalid input").css("color", "red");
//         }
//         else if (!a || !b) {
//             paragraph.text("");
//             paragraph.text("Please enter a number").css("color", "red");
//         }
//         else {
//             perimeter = 2 * a + 2 * b;
//             paragraph.text("");
//             paragraph.text(`The perimeter is ${perimeter}`).css("color", "blue");
//         }
//     }

//     button.click(function () {
//         calculateAreaOfRectangle(input1.val(), input2.val());
//     });

//     paragraph.mouseover(function () {
//         calculatePerimeterOfRectangle(input1.val(), input2.val());
//     });
// });