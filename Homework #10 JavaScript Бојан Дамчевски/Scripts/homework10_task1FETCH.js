let button = document.getElementById("button");
let paragraph = document.getElementById("para");
let input = document.getElementById("input");

function getTodo(number) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
        .then(response => {
            response.json()
                .then(result => {
                    if (result.completed == true) {
                        paragraph.innerText = (`${result.id} ${result.title} Completed`)
                    }
                    else {
                        paragraph.innerText = (`${result.id} ${result.title} Not Completed`)
                    }
                });
        })
        .catch(err => {
            console.log(err);
        });
}

button.addEventListener("click", function () {
    if (!input.value || isNaN(input.value)) {
        paragraph.innerText = (`Please enter a number !!!`)
    }
    else {
        getTodo(input.value);
    }
});