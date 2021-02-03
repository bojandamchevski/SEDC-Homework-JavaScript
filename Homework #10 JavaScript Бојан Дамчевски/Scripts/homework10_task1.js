$(document).ready(function () {
    let button = $("#button");
    let paragraph = $("#para");
    let input = $("#input");

    function getTodo(number) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/todos/${number}`,
            success: function (result) {
                if (result.completed == true) {
                    paragraph.text(`${result.id} ${result.title} Completed`);
                }
                else {
                    paragraph.text(`${result.id} ${result.title} Not Completed`);
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    button.click(function () {
        if (!input.val() || isNaN(input.val())) {
            paragraph.text(`Please enter a number !!!`);
        }
        else {
            getTodo(input.val());
        }
    });
});