function years(humanY, dogY) {
    console.log(humanY + " is the age in human years");
    console.log("Human years to Dog years " + humanY * 7 + "." + " This is the calculated age");
    console.log(dogY + " is the age in dog years");
    console.log("Dog years to Human years " + dogY / 7  + "." + " This is the calculated age");
}

years(prompt("Enter human years"),prompt("Enter dog years"));


// ---------------------ANOTHER WAY---------------------


function task3() {
    var humanYears = parseInt(prompt("Enter Human years"));
    var dogYears = parseInt(prompt("Enter dog years"));
    var humanToDog = humanYears * 7;
    var dogToHuman = dogYears / 7;

    console.log(humanYears + " is the age in human years");
    console.log("Your dog's age is " + humanToDog + " years." + " This is the calculated age");
    console.log(dogYears + " is the age in dog years");
    console.log("Human's age is " + dogToHuman + " years." + " This is the calculated age");
}

task3();