alert("Exercise 2");

var firstName = prompt("Enter a name");                    
console.log(`Merry Christmas ${firstName}.`);                                //Way 1
console.log("And a happy New Year " + firstName + ".");                      //Way 2

var greeting1 = "Merry Christmas ";
var greeting2 = " and a happy New Year "

console.log(greeting1 + firstName + greeting2 + firstName + ".");            //Way 3

var fullGreet = greeting1 + firstName + greeting2 + firstName + "."; 
console.log(fullGreet);                                                      //Way 4