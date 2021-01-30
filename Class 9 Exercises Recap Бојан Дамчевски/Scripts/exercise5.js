let inputText = document.getElementById("textBox");
let selection = document.getElementsByClassName("selection")[0];
let button = document.getElementById("button");

function addOption(input) {
    if (input == "") {
        alert("You must enter something");
        return false;
    }
    else {
        selection.innerHTML += `<option>${input}</option>`;
    }
}

inputText.addEventListener("blur", function () {
    if (inputText.value == "") {
        alert("You must enter something");
    }
});

button.addEventListener("click", function () {
    addOption(inputText.value);
    inputText.value = "";
});

//----------WITH JQUERY----------------------------------------------------

// $(document).ready(function(){
//     let inputText = $("#textBox");
//     let selection = $("select");
//     let button = $("#button");
    
//     function addOption(input){
//         if (!input) {
//             button.after("<p>You must enter something</p>");
//             return false;
//         }
//         else {
//             selection.append(`<option>${input}</option>`);
//         }
//     }

//     inputText.blur(function(){
//         if (!inputText.val()) {
//             button.after("<p>You must enter something</p>");
//         }
//     });
//     button.click(function(){
//         $("p").text("");
//         addOption(inputText.val());
//         inputText.val("");
//     });
// });