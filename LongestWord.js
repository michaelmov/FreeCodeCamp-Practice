function findLongestWord(str) {
  var wordArray = str.split(/\s/g);
  var longestWordLength = wordArray[0].length;
  
  for (var i = 0; i < wordArray.length; i++) {
    
    var wordLength = wordArray[i].length;
    console.log(wordLength);
    
    if (wordLength > longestWordLength) {
      longestWordLength = wordLength;
    }
      
  }
  
  return longestWordLength;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

