$(document).ready(function () {
    let mainBody = $("body");
    mainBody.after("<input type = 'text' placeholder = 'type here' id = 'inputText'>");
    let inputText = $("#inputText")
    mainBody.after("<input type = 'color' id = 'inputColor'>");
    let inputColor = $("#inputColor");
    mainBody.after("<input type = 'button' value = 'Generate h1' id = 'button'>");
    let button = $("input").first();
    button.on("click", function () {
        if (inputText.val() != null) {
            button.after(`<h1>${inputText.val()}</h1>`);
            $("h1").first().css("color", `${inputColor.val()}`);
        }
        else {
            button.after(`<h3>Enter valid text</h3>`);
        }
    })
});