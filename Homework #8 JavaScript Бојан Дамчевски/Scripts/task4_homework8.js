$(document).ready(function () {
    let mainBody = $("body");
    mainBody.after("<input type='text' id='text1'>");
    let input1 = $("#text1");
    mainBody.after("<input type='text' id='text2'>");
    let input2 = $("#text2");
    mainBody.after("<input type='text' id='text3'>");
    let input3 = $("#text3");
    mainBody.after("<input type='button' value ='Click' id ='button'>");
    let button = $("#button");

    function print(i, j, k) {
        let average;
        average = (i + j + k) / 3;
        if (average <= 10) {
            button.after(`<h1>${average}</h1>`);
            $("h1").first().css("color", "red");
        }
        else {
            button.after(`<h1>${average}</h1>`);
            $("h1").first().css("color","green");
        }
    }

    button.on("click", function () {
        print(parseInt(input1.val()), parseInt(input2.val()), parseInt(input3.val()));
    });
});