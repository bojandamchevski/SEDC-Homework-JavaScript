alert("Exercise 13");

console.log("Forgot how old you are ? Calculate it !");

function calculateAge(birthYear){
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var currentYear = today.getFullYear();
    var age = currentYear - birthYear;
    console.log(`The year you were born was ${birthYear}, the current year is ${currentYear} and your age is ${age};`);
}

calculateAge(parseInt(prompt("Enter year of birth for first calculation")));
calculateAge(parseInt(prompt("Enter year of birth for second calculation")));
calculateAge(parseInt(prompt("Enter year of birth for third calculation")));