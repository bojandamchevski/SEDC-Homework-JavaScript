$(document).ready(function(){
    let mainBody = $("body");
    mainBody.after('<input type="button" value = "button">');
    let button = $("input");
    mainBody.after("<h1>");
    let heading = $("h1");
    button.on("click",function(){
        heading.text("Hello there");
    });
});