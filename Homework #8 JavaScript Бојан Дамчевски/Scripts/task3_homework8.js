$(document).ready(function () {
    let options = $("option");
    let button = $("input");
    let header = $("#content");
    
    button.on("click", function(){
        options.remove();
        $("#myColor").append(`<option value = "Purple" id="newOption"> Purple </option>`);
        let newOption = $("#newOption");
        header.text(`${newOption.val()}`).css("color",`${newOption.val()}`);
        
    })
});