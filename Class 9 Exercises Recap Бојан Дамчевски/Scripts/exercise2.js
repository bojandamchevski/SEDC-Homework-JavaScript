let mainBody = document.getElementsByTagName("body")[0];
let div = document.createElement("div");
let h1 = document.createElement("h1");
let paragraph = document.createElement("p");
let inputText = document.createElement("input");
let button = document.createElement("input");

inputText.setAttribute("type", "text");
inputText.setAttribute("placeholder", "type number");
button.setAttribute("value", "Check number");
button.setAttribute("type", "button");
button.style.color = "yellow";
button.style.fontWeight = "bold";
button.style.backgroundColor = "green";

mainBody.appendChild(div);
div.appendChild(h1);
div.appendChild(inputText);
div.appendChild(button);
div.appendChild(paragraph);

h1.innerText = "Exercise 2";

function checkNumber(input) {
    if (isNaN(input)) {
        paragraph.innerHTML += "<b>Please enter a valid number!</b>";
    }
    else {
        if (input > 0) {
            paragraph.innerHTML += `<b>The number ${input} is <i>positive</i>!</b><br> <hr>`;
        }
        else if(input == 0){
            paragraph.innerHTML += `<b>The number ${input} is equal to <i>0</i>!</b><br> <hr>`;
        }
        else {
            paragraph.innerHTML += `<b>The number ${input} is <i>negative</i>!</b><br> <hr>`;
        }
        if(input == 0){
            paragraph.innerHTML += `<b>The number ${input} is equal to <i>0</i>!</b><br> <hr>`;
        }
        else if (input % 2 == 0) {
            paragraph.innerHTML += `<b>The number ${input} is <i>even</i>!</b><br> <hr>`;
        }
        else {
            paragraph.innerHTML += `<b>The number ${input} is <i>odd</i>!</b><br> <hr>`;
        }
        let i = 0;
        if (input >= 1) {
            ++i;
        }
        while (input / 10 >= 1) {
            input /= 10;
            ++i;
        }
        return i;
    }
}

button.addEventListener("click", function () {
    paragraph.innerHTML = "";
    let result = checkNumber(inputText.value);
    paragraph.innerHTML += `<b>The number ${inputText.value} has ${result} digits!</b><br> <hr>`;
});

//----------WITH JQUERY----------------------------------------------------

// $(document).ready(function () {
//     let body = $("body");
//     let input = body.append("<input type = 'text' placeholder = 'Enter a number'>");
//     let myInput = $(":text");
//     let button = body.append("<input type = 'button' value = 'Click to check'>");
//     let myButton = $(":button");
//     function checkNumber(number) {
//         if (!number) {
//             button.after(`<p>Don't leave it blank!</p>`);
//         }
//         else if (isNaN(number)) {
//             button.after(`<p>Enter number!</p>`);
//         }
//         else {
//             $("p").text("");
//             button.after(`<p>The number is <b>${number}</b></p>`);
//             if (number >= 1) {
//                 button.after(`<p>It is is positive!</p>`);
//             }
//             else {
//                 button.after(`<p>It is negative!</p>`);
//             }
//             if (number % 2 == 0) {
//                 button.after(`<p>It is even!</p>`);
//             }
//             else {
//                 button.after(`<p>It is odd!</p>`);
//             }
//             let i = 1;
//             while ((number /= 10) >= 1) {
//                 i++;
//             }
//             //Kako da go napravam da odredi od kolku cifri e sostaven brojot ako e negativen ?
//             button.after(`<p>The number has ${i} digits!</p>`);
//         }
//     }
//     myButton.click(function () {
//         $("p").text("");
//         checkNumber(myInput.val());
//     });
// });