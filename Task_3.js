/*
Create a Function that will take a path to the .json file will read it and confirm that that 
json is satisfied to conditions:
"flag" - boolean
"myPromises" - array
"element" - object
"screenshot" - null
"elementText" - string
"allElementsText" - contain "const" in string
"counter" - more that 10
"config" - equal "Common"
"const" - equal "FIRst" (case sensitive)
"parameters" - array with length 8
"description" - string with length more than 5 but less than 13
If it satisfied show "OK" in console, if not, create new json file with properties that not
satisfied and reasons why
*/

const Joi = require('@hapi/joi')
const fs = require('fs')
const { promisify } = require('util');
const promisedReadFile = promisify(fs.readFile)
const promisedWrite = promisify(fs.writeFile)
const {schema,printSuccessMsg, notStringMsg} = require('./utils') 


// use relative path only
async function compareJSON(path) {
  try {
    const rawData = await promisedReadFile(path, { type: "application/json" })
    let testJSON = JSON.parse(rawData)
    const result = Joi.validate(testJSON, schema, { abortEarly: false })
    if (result.error != null) {
     await promisedWrite('output.json',JSON.stringify(result.error.details))
     return notStringMsg('output.json file with explanations is created')
    } else {
        return printSuccessMsg('OK')
    }
  } catch (err) {
    console.log(err);
  }
}
// run in the terminal  - currently will it will return OK
compareJSON("./test.json")
