alert("Exercise 7");

var firstSub = parseFloat(prompt("Enter grade from first subject"));
var secondSub = parseFloat(prompt("Enter grade from second subject"));
var thirdSub = parseFloat(prompt("Enter grade from third subject"));
var fourthSub = parseFloat(prompt("Enter grade from fourth subject"));
var fifthSub = parseFloat(prompt("Enter grade from fifth subject"));

var examScore = (firstSub + secondSub + thirdSub + fourthSub + fifthSub) / 5;

if (examScore >= 8) {
    alert(`The student has passed with an average grade of ${examScore}`);
}

else{
    alert(`The student has failed with an average grade of ${examScore}`);
}