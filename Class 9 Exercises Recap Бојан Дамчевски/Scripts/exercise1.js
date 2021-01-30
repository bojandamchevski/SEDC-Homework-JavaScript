let arrayNumbers = [1, 2, 3, true, 4, 5, 6, null, 7, 8, "Hello there", false, 9, 10," ", 11, NaN, 12, ["a", "b", "c"], 13, 14, 15];
let arrayNumbers2 = [2, 5, ['a', 'b', 'c'], "sedc"];
let arrayNumbers3 = [2, NaN , 7, ['a', 'b', 'c'], null, "sedc", 0];

let mainBody = document.getElementsByTagName("body")[0];
let div = document.createElement("div");
let h1 = document.createElement("h1");
let paragraph = document.createElement("p");

mainBody.appendChild(div);
div.appendChild(h1);
div.appendChild(paragraph);

h1.innerText = "Exercise 1";

function checkValues(inputArray) {
    let emptyArray = [];
    for (let i = 0; i < inputArray.length; i++){
        if (!!inputArray[i]) {
            emptyArray.push(inputArray[i]);
        }
    }
    console.log(emptyArray);
    paragraph.innerHTML += `<b>${emptyArray}</b> <br> <hr>`;    
}

checkValues(arrayNumbers);
checkValues(arrayNumbers2);
checkValues(arrayNumbers3);

//----------WITH JQUERY----------------------------------------------------

// $(document).ready(function(){
//     let body = $("body");
//     let array1 = [2, 5, ['a', 'b', 'c'], "sedc", NaN];
//     let array2 = [2, NaN, 7, ['a', 'b', 'c'], null, "sedc", 0];
//     function print() {
//         let truthyArray = [];
//         let falsyArray = [];
//         for (let i = 0; i < array1.length; i++) {
//             if (!array1[i]) {
//                 falsyArray.push(array1[i]);
//             } else {
//                 truthyArray.push(array1[i]);
//             }
//         }
//         for (let j = 0; j < array2.length; j++) {
//             if (!!array2[j]) {
//                 truthyArray.push(array2[j]);
//             } else {
//                 falsyArray.push(array2[j]);
//             }
//         }
//         body.append(`<p>This array is with truthy values: [${truthyArray}]</p>`);
//         body.append(`<p>This array is with falsy values: [${falsyArray}]</p>`);
//     };
//     print();
// });