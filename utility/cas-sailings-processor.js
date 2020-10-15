const fs = require('fs');
const xlsx = require('xlsx');
const parseDate = require('../helpers/parseExcelDateCode');

let doc = xlsx.readFile('./files/cas-sailings-2021.xlsx', {type: 'binary'});

let formatedData = {};

for(let i = 0; i < doc.SheetNames.length; i++){
    let rowDataObject = xlsx.utils.sheet_to_row_object_array(doc.Sheets[doc.SheetNames[i]]);
    formatedData[doc.SheetNames[i]] = rowDataObject;
}

let sailings = formatedData.Sheet1.map((sailing)=>{
    return {
        shipCode: sailing['Ship'],
        sailDate: parseDate(parseInt(sailing['Sail Date'])),
        numberOfNights: sailing['Sail Night']
    }
});

let sortedSailings = sailings.sort((a, b)=>{
    return new Date(a.sailDate) > new Date(b.sailDate) ? 1 : -1 ;
});

let sailCodes = sortedSailings.map((sailing)=> {
    return `${sailing.shipCode}-${sailing.sailDate}-${sailing.numberOfNights}`;
})

let finalData = JSON.stringify({sailCodes: sailCodes});

fs.writeFileSync('./results/cas-sailings-2021.json', finalData);
console.log(JSON.parse(finalData).sailCodes.length + " Sailings converted to sail codes");