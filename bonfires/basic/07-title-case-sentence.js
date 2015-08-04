/*
* Return the provided string with the first letter of each word capitalized.
*
* For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.
* */

function titleCase(str) {
  var stringArray = str.toLowerCase().split(/\s/g);
  var correctedSentence;
  
  for (var i = 0; i < stringArray.length; i++) {
  	var lowerCaseWord = stringArray[i]
    var titleCaseWord = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
    stringArray[i] = titleCaseWord;
  }
  
  correctedSentence = stringArray.join(" ");
  return correctedSentence;
}

module.exports = titleCase;
