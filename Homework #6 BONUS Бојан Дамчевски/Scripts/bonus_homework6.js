let htmlBody = document.getElementsByTagName("body")[0];
let mainDiv = document.createElement("div");
mainDiv.setAttribute("id","mainDiv");
htmlBody.appendChild(mainDiv);
let titleDiv = document.createElement("div");
let contentDiv = document.createElement("div");
mainDiv.appendChild(titleDiv);
mainDiv.appendChild(contentDiv);
titleDiv.setAttribute("id", "titleDiv");
contentDiv.setAttribute("id", "contentDiv");
var dynamicTable = document.createElement("table");
var tableBody = document.createElement("tbody");
dynamicTable.appendChild(tableBody);
dynamicTable.setAttribute("border", "3");
contentDiv.appendChild(dynamicTable);

function dynamic_Table(rows, collumns) {
    for (let i = 0; i < rows; i++) {
        var tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);
        for (let k = 0; k < collumns; k++){
            var tableData = document.createElement("td");
            tableData.innerText = "";
            tableData.innerText += `Row ${i+1} ` + ` Col ${k+1}`;
            tableRow.appendChild(tableData);
        }
    }
}


let button = document.createElement("input");
contentDiv.appendChild(button);
button.setAttribute("type","button");
button.setAttribute("value","click-me");


button.addEventListener("click", function(){
    dynamic_Table(parseInt(prompt("Enter number of rows")),parseInt(prompt("Enter number of collumns")));
})