let textInput = document.getElementById("textInput");
let button = document.getElementById("button");
let selector = document.getElementsByClassName("selector")[0];
let mainbody = document.getElementsByTagName("body")[0];
function addOption(input){
    if(!input){
        mainbody.innerHTML += `<h1>Please enter something</h1>`;
    }
    else{
        selector.innerHTML += `<option>${input}</option>`;
    }
}

// textInput.addEventListener("blur", function(){

// })

button.addEventListener("click",function(){
    addOption(textInput.value)
})