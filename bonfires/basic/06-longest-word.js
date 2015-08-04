/*
* Return the length of the longest word in the provided sentence.
*
* Your response should be a number.
* */

function findLongestWord(str) {
  var wordArray = str.split(/\s/g);
  var longestWordLength = wordArray[0].length;
  
  for (var i = 0; i < wordArray.length; i++) {
    
    var wordLength = wordArray[i].length;
    
    if (wordLength > longestWordLength) {
      longestWordLength = wordLength;
    }
      
  }

  return longestWordLength;
}

module.exports = findLongestWord;

