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

titleCase("I'm a little tea pot");
