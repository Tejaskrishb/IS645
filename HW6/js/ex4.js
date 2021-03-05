/**
Write JavaScript code to display a table as shown below.  Note the following:
•	Table displays numbers 1 – 12 (a number on each row)
•	Numbers divisible by 4 have a blue background
•	Text is center aligned 
 */
// print numbers within table 
function printTable(num){
    const tableRow = document.createElement("tr");
    const tableData = document.createElement("td");
    tableData.textContent = num; // Define its text content
    if(num % 4 == 0){
        tableRow.style.backgroundColor = "#AFEEEE";//blue
    }
    tableRow.appendChild(tableData);
    document.getElementById("table").appendChild(tableRow);
}

//Call function to print numbers from 1-12
for (let i = 1; i <= 12 ; i++){
    printTable(i);
}

//Styling- add border,border color and center allign to the numbers in the table
const table = document.getElementById("table")
table.border = 1;
table.style.borderColor = "black";
table.style.textAlign = "center";
