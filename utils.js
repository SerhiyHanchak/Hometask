/* Joi is used for simple json validation,
   Chalk is used only for more visible console output */

const chalk = require("chalk")
const Joi = require('@hapi/joi')

function isString(str) {
    if (typeof str === "string" || str instanceof String) return true
    else return notStringMsg(`It is a ${typeof str}`)
  }

function isPalindrome(str) {
    let re = /[^A-Za-z0-9]/g
    str = str.toLowerCase().replace(re, "")
    let len = str.length
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false
      }
    }
    return true
  }
function printSuccessMsg(str){
    return console.log(chalk.green(str))
}
function notStringMsg (str){
    return console.log(chalk.red(str))
}

const schema = Joi.object().keys({
  flag: Joi.boolean().required(),
  myPromices: Joi.array().required(),
  element:Joi.object().required(),
  screenshot:Joi.string().valid(null).required(),
  elementText: Joi.string().required(),
  allElementsText:Joi.string().required().regex(/\b(\w*const\w*)\b/),
  counter:Joi.number().min(11).required(),
  config:Joi.string().valid('Common').required(),
  const:Joi.string().valid('FIRst').required(),
  parameters:Joi.array().min(8).required(),
  description:Joi.string().min(5).max(13).required()
})

  module.exports = {
    isString,
    isPalindrome,
    printSuccessMsg,
    notStringMsg,
    schema
  };

