let arrayNumber = [1, 2, 3, 4, 5, 6,"hello", 7, 8, 9, 10];

let mainBody = document.getElementsByTagName("body")[0];
let div = document.createElement("div");
let h1 = document.createElement("h1");
let paragraph = document.createElement("p");
let button = document.createElement("input");

button.setAttribute("value", "Click for arrays");
button.setAttribute("type", "button");
button.style.color = "red";
button.style.fontWeight = "bold";
button.style.backgroundColor = "black";

mainBody.appendChild(div);
div.appendChild(h1);
div.appendChild(button);
div.appendChild(paragraph);

h1.innerText = "Exercise 3";

function arrayOfOddEvenNumbers(input) {
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            paragraph.innerHTML += `<b>There is something that is not a number in the targeted array!</b><br> <hr>`;
        }
        else {
            if (input[i] % 2 == 0) {
                evenArray.push(input[i]);
            }
            else if (input[i] % 2 != 0) {
                oddArray.push(input[i]);
            }
        }
    }
    paragraph.innerHTML +=`Array with even numbers = [${evenArray}];<br> <hr>`;
    paragraph.innerHTML += `Array with odd numbers = [${oddArray}];<br> <hr>`;
    // return [evenArray,oddArray];  //namerno ja pravam i obicno i so return oti sakam da ima 2 resenija (zatoa rezultatot so return ke go zakomentiram)
}

button.addEventListener("click", function () {
    arrayOfOddEvenNumbers(arrayNumber);
//    let result = arrayOfOddEvenNumbers(arrayNumber);
//    console.log(result); 
// Kako so return result da gi ispecatam dvete nizi vo poseben paragraph.innerHTML koga i dvete mi se so eden return (return [evenArray, oddArray]) ?
});

//----------WITH JQUERY----------------------------------------------------

// $(document).ready(function () {
//     let body = $("body");
//     body.append("<input type = 'button' value = 'Click for arrays'>");
//     let button = $(":button");
//     let arrayNumbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1010];
//     function arrayOddEven(arr) {
//         let evenArray = [];
//         let oddArray = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (isNaN(arr[i])) {
//                 body.append(`<p>There is something that is not a number in the targeted array!</p><hr>`);
//             }
//             else {
//                 if (arr[i] % 2 == 0) {
//                     evenArray.push(arr[i]);
//                 }
//                 else if (arr[i] % 2 != 0) {
//                     oddArray.push(arr[i]);
//                 }
//             }
//         }
//         body.append(`<p>Array with even numbers = [${evenArray}];<p/><hr>`);
//         body.append(`<p>Array with odd numbers = [${oddArray}];</p><hr>`);
//     }

//     button.click(function () {
//         arrayOddEven(arrayNumbers);
//     });
// });