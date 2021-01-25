let textInput = document.getElementById("textinput");
let textInput1 = document.getElementById("textinput1");
let button = document.getElementById("button");
let mainbody = document.getElementsByTagName("body")[0];
let para = document.createElement("p");
mainbody.appendChild(para);

function calculate(input1, input2) {
    if(isNaN(input1) || isNaN(input2)){
        para.innerHTML = "";
        para.innerHTML += `<b>There is a problem</b>`;
    }
    else{
        let area = input1 * input2;
        para.innerHTML = "";
        para.innerHTML += `<b>The area is ${area}</b>`;
    }
}


button.addEventListener("click", function () {
    calculate(textInput.value, textInput1.value)
})


para.addEventListener("mouseover", function(){
    para.style.color = "green";
    para.style.fontSize = "40px";
})