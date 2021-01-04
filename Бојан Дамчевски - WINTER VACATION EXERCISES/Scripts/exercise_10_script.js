alert("Exercise 10");

function someString(word) {
    if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u") {
        console.log("Begins with a vowel.");
        console.log(`Hit${word}Hit.`);
        var result = word;
        return result;
    }
    else {
        console.log("Does not begin with a vowel.");
        console.log(`The word is ${word}.`);
        var result = word;
        return result;
    }
}

someString(prompt("Enter a word."));
