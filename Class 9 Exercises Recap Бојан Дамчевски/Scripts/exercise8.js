function Person(fullName, job, salary) {
    this.name = fullName,
        this.employed = job,
        this.earnings = salary
}

let personA = new Person("Rachel Green", true, 1700);
let personB = new Person("Sheldon Cooper", true, 2500);
let personC = new Person("Walter White", false, null);

let objectArray = [personA, personB, personC];

function returnSalaries(inputArray) {
    let sumOfSalaries = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sumOfSalaries += inputArray[i].earnings;
    }
    return sumOfSalaries;
}

let resultSalaries = returnSalaries(objectArray);
console.log(`The sum of all salaries is ${resultSalaries}`);

//----------WITH JQUERY----------------------------------------------------

// $(document).ready(function () {
//     let body = $("body");
//     body.append("<input type = 'text' placeholder = 'Enter full name' id ='fullname'>");
//     body.append("<input type = 'text' placeholder = 'Enter job' id = 'job'>");
//     body.append("<input type = 'number' placeholder = 'Enter salary' id = 'salary'>");
//     body.append("<input type = 'button' value = 'Click for sum' id = 'btn'>");
//     body.append("<input type = 'button' value = 'Click to add to array' id = 'add'>");
//     body.append("<input type = 'button' value = 'Click to see arrays' id = 'print'>");

//     let fullN = $("#fullname");
//     let jobs = $("#job");
//     let earn = $("#salary");

//     let add = $("#add");
//     let print = $("#print");
//     let submit = $("#btn");

//     function Person(fullName, job, salary) {
//         this.name = fullName,
//             this.profession = job,
//             this.earnings = salary
//     }
//     var emptyArray = [];
//     let person;
//     function createObject(fname, jobname, salaries) {
//         person = new Person(fname, jobname, salaries);
//         emptyArray.push(person);
//     }

//     add.click(function () {
//         fullN.text("");
//         jobs.text("");
//         earn.text("");
//         createObject(fullN.val(), jobs.val(), earn.val());
//     });
//     print.click(function () {
//         print.after(`<p>${person.name}</p><br><hr>`);
//     });
//     submit.click(function () {
//         let result = 0;
//         for (let price of emptyArray)
//             result += Number(price.earnings);
//         $("p").after(`<h1>${result}</h1>`);
//     });
// });