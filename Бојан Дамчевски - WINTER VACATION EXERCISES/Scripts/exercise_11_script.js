alert("Exercise 11");

function someString(word) {
    if (word.slice(-2) == "na") {
        console.log(`Ends with "na" and the word is ${word}.`);
        console.log("Hit.");
        var result = word;
        return result;
    }
    else {
        console.log(`Does not end with "na" and the word is ${word}.`);
        console.log("No Hit");
        var result = word;
        return result;
    }
}

someString(prompt("Enter a word"));

