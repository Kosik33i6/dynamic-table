import {tableData} from "./data/data.js";

function tableCreate(data) {
  

    // * GET TABLE CONTAINER ELEMENT
    const tableContainer = document.querySelector('.dynamic-table');

    // * CREATE BASIC TABLE ELEMENTS
    const table = document.createElement('table');
    const tableRow = document.createElement('tr');

    tableContainer.appendChild(table);
    table.appendChild(tableRow);

      // * CREATE TH
    // * GET OBJECT KEYS
    let keys=[];
    data.forEach(element => {
        keys = Object.keys(element);
    });
    console.log(keys);
   
    // * CREATE TABLE HEADER
    keys.forEach(key => {
        const tableHeaderCell = document.createElement('th');
        tableHeaderCell.innerHTML = key;
        tableRow.appendChild(tableHeaderCell);
    });

    // * CREATE TABLE BODY
    // * GET OBJECT VALUE
    data.map(object => { 

        // * CREATE ROWS
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);

        // * GET OBJECT VALUE
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


