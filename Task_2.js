/* 
Create a function that will take a String value as first parameters, Number value
as second and String value as third. First parameter should be a sentence or a set of sentences,
second parameter should be a number of letter in each word in sentence that should be replaced by third parameter.
That function should return updated sentence.
*/
const {isString, printSuccessMsg, notStringMsg} = require('./utils')

function rebuidSentence(str, index, chr) {
  if (isString(str)) {
    const arr = str.split(" ")
    const newArr = []
    let newStr
    arr.forEach(element => {
      if (index > element.length - 1) return newArr.push(element)
      newArr.push(element.substr(0, index - 1) + chr + element.substr(index))
    });
    return printSuccessMsg(newArr.join(" "))
  } else {
    return notStringMsg('Not supported type')
  }
}
  rebuidSentence('Lorem ipsum dolor sit amet, consectetur adipiscing elit.',2,'F')
