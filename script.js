
// const fs = require('fs')
// fs.readFile("conf.json", (err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     let json = JSON.parse(data)
//     executeConf(json)
// })



// function executeConf(jsonArray) {
//     for (const elem of jsonArray) {
//         let array = elem.input
//         eval(elem.code)
//     }
// }

// let value = 5

// function myLog(variableToLog, someCode) {
//     eval(someCode)
//     console.log(variableToLog);
// }

// myLog(value, "variableToLog = '6sd'; console.log('Gotcha')")

// function helper2() {
//     function startingUppercase(string) {
//         return string[0].toUpperCase() + string.substring(1)
//     }
    
//     function splitCamelCase(string) {
//         let newString = "";
//         for (let i = 0; i < string.length; i++) {
//             const elem = string[i];
//             if (elem === elem.toUpperCase()) {
//                 newString += (" " + elem)
//             } else {
//                 newString += elem
//             }
    
//         } return newString
//     }
//     return {startingUppercase, splitCamelCase}
    
// }

// const h2 = helper2()

// const pee=require("./mymath") //this const can be named anything, creates a "namespace"

// const helper = require("./caseHelper")
// console.log(pee.sum(3,4));

// console.log(pee.pow(3,2));
// console.log(Math.pow(3,2));

// console.log(h2.splitCamelCase("laCasaRosa"));


/////////////////////////////////////


//npm i (stands for install)


const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });