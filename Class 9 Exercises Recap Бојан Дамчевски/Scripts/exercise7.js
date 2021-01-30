let enter = document.getElementsByTagName("input")[0];
let button = document.getElementsByTagName("input")[1];
function Circle(input) {
    this.radius = input,
        this.area = function () {
            let area = this.radius * this.radius * 3.14;
            paragraph.innerHTML = `<b>The area is ${area}</b>`;
        }
    this.perimeter = function () {
        let perimeter = this.radius * 2 * 3.14;
        paragraph.innerHTML = `<b>The perimeter is ${perimeter}</b>`;
    }
}
let button2 = document.createElement("input");
button2.setAttribute("type", "button");
button2.setAttribute("value", "Area");
let button3 = document.createElement("input");
button3.setAttribute("type", "button");
button3.setAttribute("value", "Perimeter");
let mainBody = document.getElementsByTagName("body")[0];
mainBody.appendChild(button2);
mainBody.appendChild(button3);
let paragraph = document.createElement("p");
mainBody.appendChild(paragraph);

let circleA;
function print(num) {
    if (!num) {
        paragraph.innerHTML = "";
        paragraph.innerHTML += `<b>Enter a number</b>`;

    }
    else if (isNaN(num)) {
        paragraph.innerHTML = "";
        paragraph.innerHTML += `<b>ENTER A NUMBER</b>`;
    }
    else {
        paragraph.innerHTML = "";
        circleA = new Circle(num);
    }
}

button.addEventListener("click", function () {
    print(enter.value);
});
button2.addEventListener("click", function () {
    circleA.area(enter.value)
});
button3.addEventListener("click", function () {
    circleA.perimeter(enter.value)
});

//----------WITH JQUERY----------------------------------------------------

// $(document).ready(function () {
//     let body = $("body");
//     body.append("<input type = 'text' placeholder = 'Enter radius'>");
//     let input = $(":text");
//     body.append("<input type = 'button' value = 'Enter value' id = 'btn1'>");
//     body.append("<input type = 'button' value = 'Get Area' id = 'btn2'>");
//     body.append("<input type = 'button' value = 'Get Parameter' id = 'btn3'>");

//     let button1 = $("#btn1");
//     let button2 = $("#btn2");
//     let button3 = $("#btn3");

//     const pi = 3.14;

//     function Circle(number) {
//         this.radius = number,
//             this.getArea = function () {
//                 return this.radius * this.radius * pi;
//             }
//         this.getPerimeter = function () {
//             return 2 * this.radius * pi;
//         }
//     }
//     var newCircle;
//     function print(num){
//         if(!num){
//             $("#p1").text("");
//             button3.after(`<p id = 'p1'>Enter a number</p>`);
//         }
//         else if (isNaN(num)){
//             $("#p1").text("");
//             button3.after(`<p id = 'p1'>ENTER A NUMBER !</p>`);
//         }
//         else{
//             newCircle = new Circle(num);
//             $("p").text("");
//         }
//     }
//     button1.click(function () {
//         print(input.val());
//     });

//     button2.click(function () {
//         let result1 = newCircle.getArea(input.val());
//         $("#p1").text("");
//         button3.after(`<p id = 'p1'>The area is ${result1}</p>`);
//     });

//     button3.click(function () {
//         let result2 = newCircle.getPerimeter(input.val());
//         $("#p2").text("");
//         button3.after(`<p id = 'p2'>The perimeter is ${result2}</p>`);
//     });
// });