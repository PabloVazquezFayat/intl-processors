const fs = require('fs');

let ratesUsingParser = fs.readFileSync('../results/res-rates-sailings.json');
let ratesUsingText = fs.readFileSync('../results/res-rates-sailings-2.json');
 
let sailingsFromParser = JSON.parse(ratesUsingParser).sailCodes;
let sailingsFromText = JSON.parse(ratesUsingText).sailCodes;

for(let i = 0; i < sailingsFromParser.length; i++){

    if(sailingsFromParser[i] !== sailingsFromText[i]){
        console.log("not equal "+(i+1), sailingsFromParser[i], sailingsFromText[i])
    }else{
        console.log("equal "+(i+1));
    }

}