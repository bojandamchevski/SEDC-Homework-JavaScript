$(document).ready(function(){
    let arrayStrings = ["Hello","How are you today","Greetings","Goodbye","Have a nice day","How do you do"];
    let mainBody = $("body");
    mainBody.append("<h1>");
    $("h1").first().text("Exercise 4");
    $("h1").append("<h3>");
    $("h1").append("<p>");
    function characters(input){
        let moreThan10 = [];
        let lessThan10 = [];
        for(let i = 0; i < input.length; i++){
            //ova e za site vo nizata da gi proveri
            // if(input[i].length > 10){
            //     moreThan10.push(input[i]);
            //     $("h3").first().text(`(${moreThan10}) have more than 10 characters!`);
            // }
            // else if(input[i].length < 10){
            //     lessThan10.push(input[i]);
            //     $("p").first().text(`(${lessThan10}) have less than 10 characters!`);
            // }

            //ova e za prviot da go pecati so poveke od 10 karakteri (inace mi gi broi i praznite mesta vo karakteri, zosto ???)
            if(input[i].length > 10){
                return input[i];
            }
        }
    }
    // characters(arrayStrings);
    let result = characters(arrayStrings);
    $("h3").first().text(`${result}`);
});