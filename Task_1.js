/* 
Create a function that will take a String value in parameters and return message that will say
is that string a Palindrome or not 
*/

const { isPalindrome, isString, printSuccessMsg } = require('./utils')

function checkString(str) {
  if (isString(str)) {
    if (isPalindrome(str)) return printSuccessMsg('it is Palindrom')
    else return console.log('it is just a string')
  }
}

// run in the terminal
checkString('BOB')