alert("Exercise 12");

var grade = prompt("Enter grade (A, B, C, D, F)");

switch (grade) {
    case "A":
        console.log("Excelent job!");
        break;
    case "B":
        console.log("Good job!");
        break;

    case "C":
        console.log("Passed!");
        break;

    case "D":
        console.log("Not so good!");
        break;

    case "F":
        console.log("Failed!");
        break;
    default:
        console.log("Unknown grade");
        break;
}