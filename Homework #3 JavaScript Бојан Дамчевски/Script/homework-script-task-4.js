function genders(boys, girls) {

    if (boys <= 9) {
        boys = "0" + boys;
    }
    else {
    }
    if (girls <= 9) {
        girls = "0" + girls //Sakav da bidi vo eden IF, probuvav so && i ||, ama ne mi uspevase...
    }
    else {

    }
    console.log(`There are ${boys} boys in the team`);
    console.log(`There are ${girls} girls in the team`);
}

genders(prompt("Enter number of boys"), prompt("Enter number of girls"));