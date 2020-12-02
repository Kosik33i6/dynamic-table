import {tableData} from "./data/data.js";

function tableCreate(data) {

    const tableContainer = document.querySelector('.dynamic-table');

    const table = document.createElement('table');
    const tableRow = document.createElement('tr');

    tableContainer.appendChild(table);
    table.appendChild(tableRow);

    let keys=[];
    data.forEach(element => {
        keys = Object.keys(element);
    });
   
    keys.forEach(key => {
        const tableHeaderCell = document.createElement('th');
        tableHeaderCell.innerHTML = key;
        tableRow.appendChild(tableHeaderCell);
    });

    data.map(object => { 
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);
        
        const objectValues = Object.values(object); 
        objectValues.forEach(value => {
           
            if(Array.isArray(value)) {
                value = value.join(", ")
            }

            const tableBodyCell = document.createElement('td');
            tableBodyCell.innerHTML = value;
            tableRow.appendChild(tableBodyCell);
        });
    });
}


tableCreate(tableData);


