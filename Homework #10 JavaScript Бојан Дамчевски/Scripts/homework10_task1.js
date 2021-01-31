$(document).ready(function(){
    let button = $("#button");
    let paragraph = $("#para");

    function getTodo(number){
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/todos/${number}`,
            success: function (result){
                if(result.completed == true){
                    paragraph.text(`${result.id} ${result.title} Completed`);
                }
                else{
                    paragraph.text(`${result.id} ${result.title} Not Completed`);
                }
            },
            error: function(err){
                console.log(err);
            }
        });
    }
    button.click(function(){
        getTodo(parseInt(prompt("Enter number")));
    });
});